
    

        function opacity_change(img, text)
        {
            img.style.opacity = 0.2;
            text.style.opacity = 1;
        }

        function opacity_default(img, text)
        {
            img.style.opacity = 1;
            text.style.opacity = 0;
        }


        function move_scroller_to(dir, scroller)
        {

            positions = get_positions(scroller.children);

            scroller.id_dir += 3 * dir;

            if(scroller.id_dir < 0)
            {
                scroller.id_dir = 0;
            }

            if(scroller.id_dir >= positions.length-1)
            {
                
                scroller.id_dir = positions.length-1;

                if(positions.length > 3)
                {
                    scroller.id_dir -= 2;
                }
            }

            

            scrol_child = positions[scroller.id_dir];
            
            scroller.scrollLeft= scrol_child - scroller.offsetLeft;
        }

        function get_positions(children)
        {
            positions = []

            for(project of scroller.children)
            {
                positions.push(project.offsetLeft);
            }

            return positions;
        }

        function move_to(name)
        {
            element = document.getElementsByName(name)[0];

            element.scrollIntoView();
        }

        con_buttons = document.getElementsByName("move_to_button");
        for(button of con_buttons)
        {
            button.addEventListener("click",move_to.bind(null, button.dataset.move_to));
        }


        lists = document.getElementsByName("list");
       
        for(let list_index = 0; list_index < lists.length; list_index++)
        {

            let list = lists[list_index];
            list_div = list.getElementsByTagName("div")[0];
            let children = Array.from(list_div.querySelectorAll("[name='project']"));
            
            for(child of children)
            {

                image = child.querySelector("[name= 'image']").children[0];
                text = child.querySelector("[name = 'project_details']");
                text.style.opacity = 0;
                child.children[0].addEventListener("mouseover", opacity_change.bind(null, image, text));
                child.children[0].addEventListener("mouseout", opacity_default.bind(null, image, text));
                       
            }
            scroller = list.children[1];
            scroller.id_dir = 0;
            right_button = list.querySelector("[name= 'move_right']");
            right_button.addEventListener("click", move_scroller_to.bind(null, 1, scroller));
            
            left_button = list.querySelector("[name= 'move_left']");
            left_button.addEventListener("click", move_scroller_to.bind(null, -1, scroller));
            window.addEventListener("resize", move_scroller_to.bind(null, 0, scroller));
        }

        write_ones = document.getElementsByName("write_on");

        function write_into(to_write, text)
        {
            to_write.innerHTML += text[0];
            
            if(text.length <= 1)
            {
               return;
                
            }
            setTimeout(write_into.bind(null, to_write, text.slice(1, text.length)), 40);
        }

        for(write_on of write_ones)
        {
            setTimeout(write_into.bind(null, write_on, write_on.innerHTML), 1000);
            
            write_on.innerHTML = "";
        }

        let class_animations = [{name:"language_text", new_name : "animated_language_text"},
        {name: "holder", new_name: "size_anim"},
        {name: "direction_button", new_name: "button_appear"}];

        for(classes of class_animations)
        {
            elements = document.getElementsByClassName(classes.name);
            classes['elements'] = Array.from(elements);
        }

        
        function copy_invite(invitation)
        {
            alert(`nickname ${invitation} copied`)

            //var clipboard = new Clipboard('.btn');
            //navigator.clipboard.writeText(invitation);
        }

        function open_link(link)
        {
            window.open(link);
            console.log(link);
        }

        contacting_options = {'link': open_link, 'invite': copy_invite}
        contact_buttons = document.getElementsByName("contact_button");

        for(contact_button of contact_buttons)
        {
            method = contact_button.dataset.method;
            contact_value = contact_button.dataset.link;
            contact_button.addEventListener('click', contacting_options[method].bind(null, contact_value));
        }

        function check_for_in_screen()
        {
            for(classes of class_animations)
            {
                for(let i = 0; i < classes['elements'].length; i++)
                {
                    element = classes['elements'][i];
	                var position = element.getBoundingClientRect();
                    position.top += window.innerHeight/2;
                    if(position.top >= 0 && position.bottom <= window.innerHeight) 
                    {
                        element.className += ` ${classes.new_name}`;
                        
                        classes['elements'].splice(i,1);
                        i -= 1;
	                }
                }
            }
        }

        window.addEventListener('scroll', check_for_in_screen);
        check_for_in_screen();
        
$( document ).ready(function(){
            
            $('.button-collapse').sideNav({
                    menuWidth: 200,
                    closeOnClick: true,
                    edge: 'right', // <--- CHECK THIS OUT
                }
                );
            
             $('.dropdown-button').dropdown({
                 inDuration:1000,
                 gutter:30,
                 hover:true,
             });
        });
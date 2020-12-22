        //Sidenav

        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav,{}); 

        //Slider
        const slider = document.querySelector('.slider');
        M.Slider.init(slider,{
            indicators:false,
            height:500,
            transition:500,
            interval:6000
        });

        //Autocomplete
        const autocomplete = document.querySelector('.autocomplete');
        M.Autocomplete.init(autocomplete,{
            data:{
                "Toyota": null,
                "Nissian": null,
                "Volkwagen": null,
                "Opel": null,
                "Honda": null,
                "Mitishub": null,
                "Buggati": null,
                "Telsa": null,
                "Ferrari": null,
                "RangeRover": null,
            }
        });

        //Image Gallery
        const mb = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mb,{});


        //ScrollSpy
        const ss = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(ss,{});
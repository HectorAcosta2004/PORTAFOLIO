document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       AÑO AUTOMÁTICO
    ======================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ========================================
       MENÚ RESPONSIVE
    ======================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navbar.classList.toggle(
                        "menu-open"
                    );

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* Cerrar menú al seleccionar una sección */

        if (navLinks) {

            navLinks
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            navbar.classList.remove(
                                "menu-open"
                            );

                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                });

        }

    }


    /* ========================================
       ANIMACIONES AL HACER SCROLL
    ======================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }

    else {

        revealElements.forEach(element => {

            element.classList.add(
                "is-visible"
            );

        });

    }


    /* ========================================
       FILTRO DE PROYECTOS
    ======================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );

    const projects =
        document.querySelectorAll(
            ".project"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                /* Cambiar botón activo */

                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                /* Filtrar proyectos */

                projects.forEach(project => {

                    const category =
                        project.dataset.project;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        project.classList.remove(
                            "project-hidden"
                        );

                    }

                    else {

                        project.classList.add(
                            "project-hidden"
                        );

                    }

                });

            }
        );

    });


    /* ========================================
       BOTÓN VOLVER ARRIBA
    ======================================== */

    const backTop =
        document.getElementById(
            "backTop"
        );


    if (backTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 500
                ) {

                    backTop.classList.add(
                        "show"
                    );

                }

                else {

                    backTop.classList.remove(
                        "show"
                    );

                }

            },
            {
                passive: true
            }
        );


        backTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* ========================================
       EFECTO EN NAVBAR AL HACER SCROLL
    ======================================== */

    window.addEventListener(
        "scroll",
        () => {

            if (!navbar) return;


            if (
                window.scrollY > 50
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            }

            else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        },
        {
            passive: true
        }
    );


    /* ========================================
       LINK EXTERNO
    ======================================== */

    document
        .querySelectorAll(
            'a[target="_blank"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    console.log(
                        "Abriendo:",
                        link.href
                    );

                }
            );

        });

});
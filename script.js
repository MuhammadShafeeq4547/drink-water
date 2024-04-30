let glass = document.querySelectorAll(".glass1")
        let water1 = document.querySelector(".water")
        let p = document.querySelector(".p-water")
        let p2 = document.querySelector(".p-rem")

        let count = 0

        for (let [indxx, elee] of glass.entries()) {
            elee.addEventListener("click", function () {
                Glasses(indxx)
            })
        }

        function Glasses(indxx1) {
            if (indxx1 == 7 && glass[indxx1].classList.contains("bgk")) {
                indxx1--
            }
            else if (glass[indxx1].classList.contains("bgk") && !glass[indxx1].nextElementSibling.classList.contains("bgk")) {
                indxx1--
            }

            for (let [iddx, elem] of glass.entries()) {
                if (iddx <= indxx1) {
                    elem.classList.add("bgk")
                }
                else {
                    elem.classList.remove("bgk")
                }
                update()
            }
        }

        function update() {
            let gls = document.querySelectorAll(".glass1.bgk").length
            let totalGlass = glass.length

            if (gls == 0) {
                water1.style.height = "0px"
                water1.style.visibility = "hidden"
            }
            else {
                water1.style.visibility = "visible"
                water1.style.height = `${(gls / totalGlass) * 330}px`
                p.innerHTML = `${gls / totalGlass * 100}%`
            }

            if (gls == totalGlass) {
                p2.style.visibility = "hidden"
            }
            else {
                p2.style.visibility = "visible"
                p2.innerHTML = `${2 - ((250 * gls) / 1000)}L`
            }
        }

        update()
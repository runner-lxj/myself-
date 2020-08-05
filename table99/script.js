
            function renderTable() {
                let tableEl = document.querySelector("#root");  // 填空1
                for (let i = 0; i < 9; i++) {
                    let trEl = document.createElement("TR");
                    for (let j = 0; j < 9; j++) {
                        let tdEl = document.createElement("td");  // 填空2
                        if (j <= i) {
                            let a = i + 1;
                            let b = j + 1; // 填空3
                            let production = a*b;
                            tdEl.classList.add("cell");
                            tdEl.innerText = `${a} x ${b} = ${production}`;
                        }
                        
                        trEl.append(tdEl);
                    }
                    tableEl.append(trEl); // 填空4
                }
            }

            renderTable();
        
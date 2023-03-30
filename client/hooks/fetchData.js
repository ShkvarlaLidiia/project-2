// import { state, setState } from "../core/state";
// import { Button } from "../components/Button";

export async function fetchData(main, path) {
  console.log("[path]", path);
  const data = await fetch(`http://127.0.0.1:3333/${path}`);
  const parsedData = await data.json();

  [...document.querySelector(".main").children].forEach((el) => {
    el.remove();
  });

  const domArr = await parsedData.map((el) => {
    const entries = Object.entries(el);

    return `
          <div class="card">
            ${entries.map((el) => {
              if (el[0] !== "_id") {
                return `
                <div class="card__field">
                    ${
                      el[0] === "img"
                        ? `
                        <div class="img__wrapper">
                            <img class="card__image" src="${el[1]}"/> 
                        </div>
                        `
                        : ""
                    }
                    
                    ${
                      el[0] != "img"
                        ? `
                          <h2>
                            ${el[0]} : ${el[1]}
                          </h2>
                      `
                        : ""
                    }
                </div> 
                `;
              }
            })}
          </div>
          `;
  });
  main.insertAdjacentHTML("afterbegin", domArr.toString().replaceAll(",", " "));
}

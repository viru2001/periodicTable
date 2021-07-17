let allData = Object();
const colors = {
    "s": "#FFE900",
    "p": "#49faed",
    "d": "#7fff00",
    "f": "#f39c5f"
};


// get data from api
async function getData() {
    const response = await fetch('https://periodic-table-elements-info.herokuapp.com/elements');
    const data = await response.json();
    return data;
}


let dataPromise = getData();

const mainDiv = document.getElementById("main-grid");
// this function adds one element in a grid
function addChild(name, symbol, atomicNumber, block, groupBlock) {

    let div = document.createElement('div');
    div.className = "element " + block + "-block " + groupBlock;
    div.setAttribute('data-name', name);
    div.setAttribute('data-block', block);
    let p1 = document.createElement('p');
    p1.innerHTML = atomicNumber;
    let p2 = document.createElement('p');
    p2.innerHTML = symbol;

    div.appendChild(p1);
    div.appendChild(p2);


    mainDiv.appendChild(div);
}

// fill all data in a grid
dataPromise.then(data => {
    allData = data;
    for (let [element] of Object.entries(data)) {

        let name = "";
        let symbol = "";
        let atomicNumber = "";
        let block = "";
        let groupBlock = ""

        name = data[element]['name'];
        symbol = data[element]['symbol'];
        atomicNumber = data[element]['atomicNumber'];
        block = data[element]['block'];
        groupBlock = data[element]['groupBlock'];

        if (atomicNumber == 57) {
            addChild("Lanthanides", "La-Lu", "57-70", "extra", "");
            addChild("", "", "", "fill-space", "");
            addChild("", "", "", "fill-space", "");
        }
        if (atomicNumber == 89) {
            addChild("Actinides", "Ac-Lr", "89-102", "extra", "");
            addChild("", "", "", "fill-space", "");
            addChild("", "", "", "fill-space", "");
        }
        addChild(name, symbol, atomicNumber, block, groupBlock);
    }

    const cells = document.querySelectorAll('.element');
    const selectedElement = document.getElementById("selectedElementName");


    // display name of element on mouse hover
    cells.forEach(element => element.addEventListener('mousemove', () => {
        selectedElement.innerHTML = element.getAttribute("data-name");
    }));

    cells.forEach(element => element.addEventListener('mouseout', () => {
        selectedElement.innerHTML = "";
    }));


    // show all data of element on mouse click
    const popupElements = document.querySelectorAll(".element:not(.extra-block)");
    popupElements.forEach(element => element.addEventListener('click', () => {

        const overlay = document.querySelector(".overlay");
        overlay.style.visibility = "visible";
        overlay.style.opacity = 1;

        const name = document.querySelector("#element-name");
        const blockName = document.querySelector("#block-name");

        const atomicNumber = document.querySelector("#atomicNumber");
        const atomicMass = document.querySelector("#atomicMass");
        const group = document.querySelector("#group");
        const period = document.querySelector("#period");
        const electronicConfiguration = document.querySelector("#electronicConfiguration");
        const electronegativity = document.querySelector("#electronegativity");
        const atomicRadius = document.querySelector("#atomicRadius");
        const ionRadius = document.querySelector("#ionRadius");
        const vanDerWaalsRadius = document.querySelector("#vanDerWaalsRadius");
        const ionizationEnergy = document.querySelector("#ionizationEnergy");
        const electronAffinity = document.querySelector("#electronAffinity");
        const oxidationStates = document.querySelector("#oxidationStates");
        const standardState = document.querySelector("#standardState");
        const bondingType = document.querySelector("#bondingType");
        const meltingPoint = document.querySelector("#meltingPoint");
        const boilingPoint = document.querySelector("#boilingPoint");
        const density = document.querySelector("#density");
        const groupBlock = document.querySelector("#groupBlock");
        const yearDiscovered = document.querySelector("#yearDiscovered");




        const elementData = allData.find(x => x.name == element.getAttribute("data-name"));


        blockName.innerHTML = elementData['block'] + " block";
        name.innerHTML = element.getAttribute("data-name") + " ( " + elementData['symbol'] + " )";

        atomicNumber.innerHTML = elementData['atomicNumber'];
        atomicMass.innerHTML = elementData['atomicMass'];
        group.innerHTML = elementData['group'];
        period.innerHTML = elementData['period'];
        electronicConfiguration.innerHTML = elementData['electronicConfiguration'];
        electronegativity.innerHTML = elementData['electronegativity'];
        atomicRadius.innerHTML = elementData['atomicRadius'];
        ionRadius.innerHTML = elementData['ionRadius'];
        vanDerWaalsRadius.innerHTML = elementData['vanDerWaalsRadius'];
        ionizationEnergy.innerHTML = elementData['ionizationEnergy'];
        electronAffinity.innerHTML = elementData['electronAffinity'];
        oxidationStates.innerHTML = elementData['oxidationStates'];
        standardState.innerHTML = elementData['standardState'];
        bondingType.innerHTML = elementData['bondingType'];
        meltingPoint.innerHTML = elementData['meltingPoint'];
        boilingPoint.innerHTML = elementData['boilingPoint'];
        density.innerHTML = elementData['density'];
        groupBlock.innerHTML = elementData['groupBlock'];
        yearDiscovered.innerHTML = elementData['yearDiscovered'];

    }));

    const close = document.querySelector(".close");
    close.addEventListener('click', () => {
        const x = document.querySelector(".overlay");
        x.style.visibility = "hidden";
        x.style.opacity = 0;
    });

});



// glow p-block elements on hover
const selectP = document.querySelector("#select-p-block");

selectP.addEventListener("mousemove", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });

    let pBlockElements = document.querySelectorAll(".p-block");
    pBlockElements.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#9ecaed";
        element.style.boxShadow = "0 0 20px #9ecaed";
    });
});

selectP.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    let pBlockElements = document.querySelectorAll(".p-block");
    pBlockElements.forEach((element) => {


        element.style.borderColor = colors.p;
        element.style.boxShadow = "none";
    });
});


// glow d-block elements on hover

const selectD = document.querySelector("#select-d-block");

selectD.addEventListener("mousemove", () => {

    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });

    let pBlockElements = document.querySelectorAll(".d-block");
    // grid.style.opacity = 0.1;
    pBlockElements.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#9ecaed";
        element.style.boxShadow = "0 0 20px #9ecaed";
    });
});

selectD.addEventListener("mouseout", () => {

    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    let pBlockElements = document.querySelectorAll(".d-block");
    pBlockElements.forEach((element) => {
        element.style.borderColor = colors.d;
        element.style.boxShadow = "none";
    });
});


// glow s-block elements on hover

const selectS = document.querySelector("#select-s-block");

selectS.addEventListener("mousemove", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });

    let pBlockElements = document.querySelectorAll(".s-block");
    pBlockElements.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#9ecaed";
        element.style.boxShadow = "0 0 20px #9ecaed";
    });
});

selectS.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    let pBlockElements = document.querySelectorAll(".s-block");
    pBlockElements.forEach((element) => {
        element.style.borderColor = colors.s;
        element.style.boxShadow = "none";
    });
});


// glow f-block elements on hover

let selectF = document.querySelector("#select-f-block");

selectF.addEventListener("mousemove", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    let pBlockElements = document.querySelectorAll(".f-block");
    pBlockElements.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#9ecaed";
        element.style.boxShadow = "0 0 20px #9ecaed";
    });
});

selectF.addEventListener("mouseout", () => {

    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    let pBlockElements = document.querySelectorAll(".f-block");
    pBlockElements.forEach((element) => {
        element.style.borderColor = colors.f;
        element.style.boxShadow = "none";
    });
});

// glow animations 


const selectAlkalineEarthMetals = document.querySelector("#alkaline-earth-metal");

selectAlkalineEarthMetals.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });

    const alkalineEarthMetals = document.querySelectorAll(".alkaline.earth.metal");
    alkalineEarthMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 20px #fff";
    });
});

selectAlkalineEarthMetals.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const alkalineEarthMetals = document.querySelectorAll(".alkaline.earth.metal");
    alkalineEarthMetals.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});


const selectAlkaliMetals = document.querySelector("#alkali-metal");

selectAlkaliMetals.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const alkaliMetals = document.querySelectorAll(".alkali.metal");
    alkaliMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 20px #fff";
    });
});

selectAlkaliMetals.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const alkaliMetals = document.querySelectorAll(".alkali.metal");
    alkaliMetals.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});


const selectNonMetals = document.querySelector("#nonmetal");

selectNonMetals.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const nonMetals = document.querySelectorAll(".nonmetal");
    nonMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 20px #fff";
    });
});

selectNonMetals.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const nonMetals = document.querySelectorAll(".nonmetal");
    nonMetals.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectMetals = document.querySelector("#metals");

selectMetals.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const metals = document.querySelectorAll(".metal");
    metals.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectMetals.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const metals = document.querySelectorAll(".metal");
    metals.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectTransitionMetals = document.querySelector("#transition-metal");

selectTransitionMetals.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const transitionMetals = document.querySelectorAll(".transition.metal");
    transitionMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectTransitionMetals.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const transitionMetals = document.querySelectorAll(".transition.metal");
    transitionMetals.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});


const selectPostTransitionMetals = document.querySelector("#post-transition-metal");

selectPostTransitionMetals.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const postTransitionMetals = document.querySelectorAll(".post-transition.metal");
    postTransitionMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectPostTransitionMetals.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const postTransitionMetals = document.querySelectorAll(".post-transition.metal");
    postTransitionMetals.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectHalogens = document.querySelector("#halogen");

selectHalogens.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const halogens = document.querySelectorAll(".halogen");
    halogens.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectHalogens.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const halogens = document.querySelectorAll(".halogen");
    halogens.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectNobleGases = document.querySelector("#noble-gas");

selectNobleGases.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const nobleGases = document.querySelectorAll(".noble.gas");
    nobleGases.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectNobleGases.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const nobleGases = document.querySelectorAll(".noble.gas");
    nobleGases.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectMetalloids = document.querySelector("#metalloids");

selectMetalloids.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const metallids = document.querySelectorAll(".metalloid");
    metallids.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectMetalloids.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const metallids = document.querySelectorAll(".metalloid");
    metallids.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectLanthanides = document.querySelector("#lanthanoid");

selectLanthanides.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const lanthanides = document.querySelectorAll(".lanthanoid");
    lanthanides.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectLanthanides.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const lanthanides = document.querySelectorAll(".lanthanoid");
    lanthanides.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

const selectactinides = document.querySelector("#actinoid");

selectactinides.addEventListener("mousemove", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 0.3;
    });
    const actinides = document.querySelectorAll(".actinoid");
    actinides.forEach((element) => {
        element.style.opacity = 1;
        element.style.borderColor = "#fff";
        element.style.boxShadow = "0 0 10px #fff";
    });
});

selectactinides.addEventListener("mouseout", () => {
    const allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });
    const actinides = document.querySelectorAll(".actinoid");
    actinides.forEach((element) => {
        const elementColor = element.getAttribute("data-block");
        element.style.borderColor = colors[elementColor];
        element.style.boxShadow = "none";
    });
});

setTimeout(() => {
    const laoding = document.querySelector(".laoding");
    // laoding.style.visibility = "hidden";
    laoding.remove();
    blockSelector.style.visibility = "visible";
    mainGrid.style.visibility = "visible";
    elementSelector.style.visibility = "visible";
}, 3000);

const blockSelector = document.querySelector("#block-selector");
const mainGrid = document.querySelector("#main-grid");
const elementSelector = document.querySelector("#element-selector");
blockSelector.style.visibility = "hidden";
mainGrid.style.visibility = "hidden";
elementSelector.style.visibility = "hidden";


const addContentSection = document.querySelector(".addNewContetnt");

function addNewDeposit() {
    const calcDiv = document.createElement('div');
    calcDiv.classList.add("calculateRevenue");

    // Create and populate the dataInput div
    const divDataInput = document.createElement('div');
    divDataInput.classList.add("dataInput");

    const labelName = document.createElement('label');
    labelName.textContent = "Name:";
    const inputName = document.createElement('input');
    inputName.placeholder = "Bank 'Light Leaves'";

    const labelSum = document.createElement('label');
    labelSum.textContent = "Sum:";
    const inputSum = document.createElement('input');
    inputSum.type = 'number';
    inputSum.classList.add('sumDeposit');

    const labelPercent = document.createElement('label');
    labelPercent.textContent = "%:";
    const inputPercent = document.createElement('input');
    inputPercent.type = 'number';
    inputPercent.classList.add('percentYear');

    const labelMonth = document.createElement('label');
    labelMonth.textContent = "Months:";
    const inputMonth = document.createElement('input');
    inputMonth.type = 'number';
    inputMonth.classList.add('monthCount');

    divDataInput.append(labelName, inputName, labelSum, inputSum, labelPercent, inputPercent, labelMonth, inputMonth);

    // Create the circleDiagram div
    const divDiagram = document.createElement('div');
    divDiagram.classList.add("circleDiagram");
    const figureChart = document.createElement('figure');
    const piechart = document.createElement('div');
    piechart.classList.add("donut2");
    const pieChartRevenueParagraf = document.createElement('p');
    piechart.appendChild(pieChartRevenueParagraf);
    figureChart.appendChild(piechart);
    divDiagram.appendChild(figureChart);

    // Create the totalResult div
    const divResults = document.createElement('div');
    divResults.classList.add("totalResult");

    const spanTrash = document.createElement('span');
    const iconTrash = document.createElement('i');
    iconTrash.classList.add('fa-solid', 'fa-trash');
    spanTrash.appendChild(iconTrash);

    // Add event listener to trash icon
    spanTrash.addEventListener('click', function () {
        calcDiv.remove(); // Remove the corresponding calculateRevenue div
    });

    const revenueLabel = document.createElement('h2');
    revenueLabel.textContent = "Revenue:";
    const revenuePerMonthLabel = document.createElement('h2');
    revenuePerMonthLabel.textContent = "Revenue per month:";
    const totalLabel = document.createElement('h1');
    totalLabel.textContent = "Total:";
    divResults.append(spanTrash, revenueLabel, revenuePerMonthLabel, totalLabel);

    // Create the buttonContainer div
    const divBtnContainer = document.createElement('div');
    divBtnContainer.classList.add("buttonContainer");
    const calcBtn = document.createElement('button');
    calcBtn.classList.add("ClacBtn");
    calcBtn.textContent = "Calculate";

    calcBtn.addEventListener("click", () => {
        const sum = Number(inputSum.value);
        const percent = Number(inputPercent.value);
        const month = Number(inputMonth.value);
    
        console.log(sum);
        if (isNaN(sum) || isNaN(percent) || isNaN(month)) {
            alert("Please enter valid numbers!");
            return;
        }
        
        if(sum <=0 || percent <= 0 || month <= 0){
            alert("Please enter non zero numbers!");
            return;
        }

        const revenueMonth = (sum * (percent / 1200)).toFixed(2);
        const revenueR = (revenueMonth * month).toFixed(2);
        const revenueTotal = (sum + Number(revenueR)).toFixed(2);
    
        /* revenue labels */ 
        revenueLabel.textContent = `Revenue: ${revenueR}`;
        revenuePerMonthLabel.textContent = `Revenue per month: ${revenueMonth}`;
        totalLabel.textContent = `Total: ${revenueTotal}`;

        /* pie chart */
        const percentageRevenue = ((revenueR/revenueTotal)*100).toFixed(2);
        pieChartRevenueParagraf.textContent = revenueR;
        piechart.style.backgroundImage = `
        radial-gradient(var(--cLightBlue) 40%, transparent 0 70% ),
        conic-gradient(
            var(--cGreenBlue) 0 ${percentageRevenue}%, 
            var(--cViolet1Hover) ${percentageRevenue}% 100%
        )
        `;

    });
    
    divBtnContainer.appendChild(calcBtn);

    // Append everything to calcDiv
    calcDiv.appendChild(divDataInput);
    calcDiv.appendChild(divDiagram);
    calcDiv.appendChild(divResults);
    calcDiv.appendChild(divBtnContainer);

    // Append calcDiv to the main container
    addContentSection.appendChild(calcDiv);
}

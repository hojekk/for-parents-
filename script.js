

var boddy = document.querySelector("body");
var isDivVisible = false; // Переменная для отслеживания состояния
var div; // Переменная для хранения созданного div

document.querySelector(".call-alert").addEventListener("click", function () {
    if (isDivVisible) {
        // Если div существует, запускаем анимацию скрытия
        div.style.opacity = "0";
        div.style.transform = "scale(1)";
        setTimeout(() => {
            if (div && boddy.contains(div)) {
                boddy.removeChild(div); // Удаляем div из DOM
                isDivVisible = false;
            }
        }, 500); // Удаляем после завершения анимации (время совпадает с transition)
    } else {
        // Если div не существует, создаем его
        div = document.createElement("div");
        let text = document.createElement("h2");
        text.innerHTML = "Твій подарунок";

        let inputs = document.createElement("input");
        div.prepend(text);

        inputs.placeholder = "Введіть своє ім'я";

        let input = document.createElement("input");
        input.placeholder = "Ваш Код(переверніть листок)";
        // div.append(input);  



        let buton = document.createElement("button")
        // inputs.after(buton);
        div.append(inputs); // Добавляем первый input
        div.append(input);  // Добавляем второй input
        div.append(buton);  // Добавляем кнопку

        buton.innerHTML = ("Знайти подарунок!")

        buton.addEventListener("click", function(){
            if(inputs.value === "Оксана" && input.value === "1111"){
                console.log("work")
                alert("Ваш подарунок десь у гардиробній ")
            }

            if(inputs.value === "Іван" && input.value === "2222"){
                alert("Ваш подарунок у гостинній")
            }

            if(inputs.value ==="Ваня" && input.value === "2222"){
                alert("Ваш подарунок у гостинній")
            }
        

        })



        // =============================== Стиль


        input.classList.add("input")
        inputs.classList.add("inputs")

        buton.style.cssText = `
        cursor: pointer;
    display:block;
    margin:auto;
color:black;
    width: 170px;
    height: 30px;
    background-color: rgb(122, 122, 122);
    border-radius: 20px;
    
        `

        

        inputs.style.cssText = `
            color: white;
            display: block;
            margin: 20px auto;
            width: 70%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 20px;
            background-color: rgb(45, 45, 45);
        `;

        input.style.cssText = `
        color: white;
            display: block;
            margin: 20px auto;
            width: 70%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 20px;
            background-color: rgb(45, 45, 45);
        `;

        text.style.cssText = `
            color: white;
            text-align: center;
            font-weight: 500;
            padding-top: 2%;
        `;

        div.style.cssText = `
            width: 270px;
            height: 400px;
            background-color: rgb(185, 43, 43);
            margin: auto;
            border-radius: 20px;
            opacity: 0; /* Начальное состояние (скрыто) */
            transform: scale(1); /* Эффект масштабирования */
            transition: all 0.3s ease-in-out; /* Плавность */
        `;


        boddy.append(div);

        // Небольшая задержка для запуска анимации
        setTimeout(() => {
            div.style.opacity = "1"; // Плавное появление
            div.style.transform = "scale(1)"; // Масштабирование до нормального размера
        }, 50);

        isDivVisible = true; // Устанавливаем флаг
    }
});






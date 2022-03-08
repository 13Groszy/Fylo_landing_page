let subInput = document.querySelector(".subscription__input");
let sub_failed = document.querySelector(".subscription__failed");

let checkMail = () => {
    if (subInput.value.includes("@" && ".")) {
        sub_failed.classList.add("display");
    }else{
        sub_failed.classList.remove("display");
    }
};


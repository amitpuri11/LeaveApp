document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector("#btn");
    btn.addEventListener("click",(e)=>{

        e.preventDefault();
        const school = document.querySelector("#school").value
        const fname = document.querySelector("#name").value
        const cls = document.querySelector("#class").value
        const roll = document.querySelector("#roll").value
        const date = document.querySelector("#date").value
        const reason = document.querySelector("#reason").value
        const days = document.querySelector("#days").value
        const para = document.querySelector("#para");

        para.innerHTML = `
        Leave Application Letter<br><br>
        ${fname}<br>
        ${cls}<br>
        ${school}<br>
        ${date}<br>
        
        Subject: Application for Leave<br>
        <br>
        Respected Sir/Madam,
        <br>
        <br>
        I hope this letter finds you well. I am writing to formally request leave from school for ${days} days due to ${reason}.<br><br>
        I would kindly request leave. I assure you that I will catch up on any missed lessons and assignments upon my return to school.<br><br>
        
        Thank you for considering my application. I am looking forward to your positive response.<br><br>
        
        Yours sincerely,<br>
        ${fname}<br>
        ${cls}<br>
        ${roll}<br>
                `;
    })


});

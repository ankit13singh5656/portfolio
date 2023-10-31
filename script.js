
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.querySelector("#" + tabname).classList.add("active-tab");
}


// ------------form dat -------------


function submitToGoogleSheet(event) {
    event.preventDefault();

const scriptURL = 'https://script.google.com/macros/s/AKfycbwtUbBfULJAxsBOh6C6alf-UZcbk_Re3CphjIn1CqMoSuMUQPbgwgLy6DtQwHlpk_8t/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    if (response.ok) {
                        alert("Thank you for your message.");
                        form.reset();
                        setTimeout(function() {
                            msg.innerHTML = "";
                        }, 1000); // Set a more reasonable duration, e.g., 5 seconds
                    } else {
                        msg.innerHTML = "Error: Something went wrong. Please try again later.";
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    msg.innerHTML = "Error: Something went wrong. Please try again later.";
                });
        }
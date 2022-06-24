console.log("Disable Organization Folder");
console.log("******************************************************************************");

var divsToHide = document.getElementsByClassName("jenkins_branch_OrganizationFolder"); //divsToHide is an array
for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.visibility = "hidden"; // or
    divsToHide[i].style.display = "none"; // depending on what you're doing
}

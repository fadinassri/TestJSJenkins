console.log("Disable Organization Folder Job Type");

var refreshIntervalId = setInterval(removeOrganizationFolder, 500);

function removeOrganizationFolder() {
    var divsToHide = document.getElementsByClassName("jenkins_branch_OrganizationFolder"); //divsToHide is an array
    console.log("divsToHide.length jenkins_branch_OrganizationFolder found", divsToHide.length);
    if (divsToHide.length > 0) {
        divsToHide[0].style.visibility = "hidden"; // or
        divsToHide[0].style.display = "none"; // depending on what you're doing
        clearInterval(refreshIntervalId);

    }
}


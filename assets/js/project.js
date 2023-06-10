const projectItemsContainer = $("#projectItemsContainer");
const typeAll = $("#typeAll");
const typeWeb = $("#typeWeb");
const typeAssignments = $("#typeAssignments");
const typeStandalone = $("#typeStandalone");


var selectedType = "all";
const projects = [
    {
        title: "Group Chatting App",
        github: "https://github.com/sachinivindoya/groupChat",
        type: "standalone",
        icon: "assets/images/chat (2).JPG",
        description: 'This project is done for my second semester Introduction to Networking final project.\n' +
            '                        I used Java socket programming to develop this application'
    },
    {
        title: "POS-Bootstrap",
        github: "https://github.com/NaashNix/POS-bootstrap",
        type: "web",
        icon: "./assets/images/pos_bootstrap.png",
        description: 'This Point Of Sale System developed for the assignment in Internet Technologies Module. Used bootstrap as the frontend css framework.'
    },
    {
        title: "Student Management System",
        github: "https://github.com/NaashNix/orm-cw",
        type: "standalone",
        icon: "./assets/images/ormCW.png",
        description: 'In here use can add student as well as courses or programs. ser can view students and their related courses. used Hibernate as ORM the tool.'
    },
    {
        title: "Mini Car Game",
        github: "https://github.com/NaashNix/mini-car-game",
        type: "web",
        icon: "./assets/images/miniCarGame.png",
        description: 'This simple car game was developed using jQuery , HTML, CSS and JavaScript. As a sub assignment for the Advanced API module.'
    },
    {
        title: "POS-Layered Architecture",
        github: "https://github.com/NaashNix/POS_Layered",
        type: "standalone",
        icon: "./assets/images/posLayered.png",
        description: 'This POS system developed using Java, JavaFX with standard of Layered Architecture. MySql used as the database. '
    },
    {
        title: "Personal Website",
        github: "https://github.com/NaashNix/MyProfile",
        type: "web",
        icon: "./assets/images/myProfileWeb.png",
        description : 'My Personal Website developed using HTML, CSS and JavaScript with Jquery.'
    }

    // Add more projects here as the object with above attributes.

];

const typeAllClicked = () => {
    typeAll.removeClass("active");
    typeWeb.removeClass("active");
    typeAssignments.removeClass("active");
    typeStandalone.removeClass("active");
    typeAll.addClass("active");
    changeProjects("all");
};

function typeWebClicked() {
    console.log("web clicked");
    typeAll.removeClass("active");
    typeWeb.removeClass("active");
    typeAssignments.removeClass("active");
    typeStandalone.removeClass("active");
    typeWeb.addClass("active");
    changeProjects("web");
}

const typeAssignmentsClicked = () => {
    typeAll.removeClass("active");
    typeWeb.removeClass("active");
    typeAssignments.removeClass("active");
    typeStandalone.removeClass("active");
    typeAssignments.addClass("active");
    changeProjects("mobileApps");
};

const typeStandaloneClicked = () => {
    typeAll.removeClass("active");
    typeWeb.removeClass("active");
    typeAssignments.removeClass("active");
    typeStandalone.removeClass("active");
    typeStandalone.addClass("active");
    changeProjects("standalone");
};

changeProjects('all');

function changeProjects(type) {
    projectItemsContainer.html("");

    if (type === "all") {
        projects.forEach((item) => {
            projectItemsContainer.append(createItem(item));
        });
    } else {
        projects.forEach((item) => {
            if (item.type === type) {
                projectItemsContainer.append(createItem(item));
            }
        });
    }
}

let scroll = 0;

function rightScrollButtonClicked(){

    if (!(projectItemsContainer.width()<scroll)){
        scroll += 500;
        projectItemsContainer.scrollLeft(scroll);
    }

}

function leftScrollButtonClicked() {

    if (!(scroll < 1)) {
        scroll -= 500;
        projectItemsContainer.scrollLeft(scroll);
    }

}

function createItem(itemDetails) {
    return `<div class="projectItem">
            <div class="iconsParent">
                <img src="${itemDetails.icon}" alt="">
            </div>
            <div class="description">
                <span>${itemDetails.title}</span>
                <hr>
                <p>${itemDetails.description}</p>
                <a href="${itemDetails.github}" ><img src="./assets/images/github.png" alt=""></a>
            </div>
            </div>`;
}

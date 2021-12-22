import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Icon from "@mui/material/Icon";

const Projects = () => {
  const listedProjects = [
    // {
    //   name: 'Food Delivery',
    //   route: '/food-delivery',
    //   icon: 'fast-food-outline',
    // },
    {
      name: "Fitness Application",
      route: "/fitness",
      icon: "fitness_center",
    },
    {
      name: "E-Commerce Application",
      route: "/e-commerce",
      icon: "shopping_bag",
    },
    // {
    //   name: "Social Media",
    //   route: "/social-media",
    //   icon: "thumbs-up-outline",
    // },
    {
      name: "Music Streaming",
      route: "/music-streaming",
      icon: "music_note",
    },
    // { name: "Chat", route: "/chat", icon: "chatbox-ellipses-outline" },
    { name: "Job Portal", route: "/job-portal", icon: "filter_list" },
    { name: "Portfolio", route: "/portfolio", icon: "newspaper" },
    {
      name: "Store Listing",
      route: "/store-listing",
      icon: "storefront",
    },
    { name: "Appointment", route: "/appointment", icon: "calendar_month" },
    { name: "Forum", route: "/forum", icon: "article" },
    { name: "Real Estate", route: "/real-estate", icon: "home" },
    { name: "Booking", route: "/booking", icon: "bed" },
  ];

  return (
    <div className="container">
      <div className="credentials">
        <h3>You can access all projects with the below credentials</h3>
        <div>
          <div className="credential-head">
            <span> Username :</span>
            <span> Password :</span>
          </div>
          <div className="credential-row">
            <span onClick={() => navigator.clipboard.writeText("admin@gmail.com")}>
              admin@gmail.com <Icon>content_copy</Icon>
            </span>
            <span onClick={()=>navigator.clipboard.writeText("admin")}>
              admin <Icon>content_copy</Icon>
            </span>
          </div>
        </div>
      </div>
      <List>
        {listedProjects.map((project, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>{project.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={project.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
export default Projects;


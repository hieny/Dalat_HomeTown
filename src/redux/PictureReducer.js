const initialState = {
  picture: [
    { name: "fam_1", img: "../assets/images/fam_1.jpg" },
    { name: "fam_2", img: "../assets/images/fam_2.jpg" },
    { name: "fam_3", img: "../assets/images/fam_3.jpg" },
    { name: "fam_4", img: "../assets/images/fam_4.jpg" },
    { name: "fam_5", img: "../assets/images/fam_5.jpg" },
    { name: "fam_6", img: "../assets/images/fam_6.jpg" },
    { name: "fam_7", img: "../assets/images/fam_7.jpg" },
    { name: "fam_8", img: "../assets/images/fam_8.jpg" },
    { name: "fam_9", img: "../assets/images/fam_9.jpg" },
    { name: "fam_10", img: "../assets/images/fam_10.jpg" },
    { name: "fam_11", img: "../assets/images/fam_11.jpg" },
    { name: "fam_12", img: "../assets/images/fam_12.jpg" },
    { name: "fam_13", img: "../assets/images/fam_13.jpg" },
    { name: "fam_14", img: "../assets/images/fam_14.jpg" },
    { name: "fam_15", img: "../assets/images/fam_15.jpg" },
    { name: "fam_16", img: "../assets/images/fam_16.jpg" },
    { name: "fam_17", img: "../assets/images/fam_17.jpg" },
    { name: "fam_18", img: "../assets/images/fam_18.jpg" },
    { name: "fam_19", img: "../assets/images/fam_19.jpg" },
    { name: "fam_20", img: "../assets/images/fam_20.jpg" },
    { name: "fam_21", img: "../assets/images/fam_21.jpg" },
    { name: "fam_22", img: "../assets/images/fam_22.jpg" },
    { name: "fam_23", img: "../assets/images/fam_23.jpg" },
  ],
};

const PictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return { ...state };

    default:
      return state;
  }
};

export default PictureReducer;

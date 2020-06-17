import moment from "moment";

export default {
  format: {
    iso: {
      date: (date) => {
        const split = date && date.split(".");
        return moment(split[0], "YYYY-MM-DDTHH:mm:ss").format("YYYY/MM/DD");
      },
    },
  },
};

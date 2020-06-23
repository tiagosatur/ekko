import moment from "moment";

export default {
  format: {
    iso: {
      date: (date) => {
        if (!date) return;
        const split = date && date.split(".");
        return moment(split[0], "YYYY-MM-DDTHH:mm:ss").format("YYYY/MM/DD");
      },
    },
  },
};

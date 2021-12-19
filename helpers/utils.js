import moment from "moment";

export const moment_date = ({ date }) => {
  const local_date = utc_to_local({ date }),
    res = moment(local_date).add(7, "days").isBefore(moment())
      ? moment(local_date).format("DD MMM YYYY")
      : moment(local_date).fromNow();
  return res;
};

export const utc_to_local = (params) => {
  const utc = moment.utc(params.date).toDate(),
    res = moment(utc).local().format("YYYY-MM-DD HH:mm:ss");
  return res;
};

export const utc_to_local_short = (params) => {
  return moment(params).local().format("DD MMM YYYY");
};


export const truncate_text = (text, maxchar) => {
  let truncated = text;

  if (truncated.length > maxchar) {
    truncated = truncated.substr(0, maxchar);
    truncated = truncated + "..."
  }
  return truncated;
};

export const number = (props) => {
  const rp = Number(props, '')
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(rp)
}

function msToMS(duration) {
  const Iseconds = parseInt((duration / 1000) % 60);
  const  Iminutes = parseInt((duration / (1000 * 60)) % 60);
    // hours = parseInt((duration / (1000 * 60 * 60)) % 24);

//   hours = hours < 10 ? '0' + hours : hours;
  const minutes = Iminutes < 10 ? '0' + Iminutes : Iminutes;
  const seconds = Iseconds < 10 ? '0' + Iseconds : Iseconds;

  return  minutes + ':' + seconds;
}


export default msToMS;
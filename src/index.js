module.exports = (lat1, lon1, lat2, lon2, unit) => {
    let theta = lon1 - lon2;
    let dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
    dist = Math.acos(dist);
    dist = rad2deg(dist);
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
        dist = dist * 1.609344;
    } else if (unit == "N") {
        dist = dist * 0.8684;
    }
    return (dist);
}
function deg2rad(deg) {
    return (deg * Math.PI / 180.0);
}
function rad2deg(rad) {
    return (rad * 180 / Math.PI);
}
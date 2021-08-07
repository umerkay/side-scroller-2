//keyboard
function keyPressed(key) {}
function keyUnPressed(key) {}
function mouseClick() {
  // if (doPause) {
  //   resume();
  // }
}
function mouseUnClick() {}
function mouseMoved() {}

keys = {
  active: [],
  up: 38,
  down: 40,
  right: 39,
  left: 37,
  up2: 87,
  down2: 83,
  right2: 68,
  left2: 65,
  space: 32,
  esc: 27,
};

let keyLog = [];
keyBanks = [
  '[{"frameCount":0,"keyCode":39,"event":"keydown"},{"frameCount":33,"keyCode":38,"event":"keydown"},{"frameCount":72,"keyCode":38,"event":"keyup"},{"frameCount":111,"keyCode":38,"event":"keydown"},{"frameCount":143,"keyCode":38,"event":"keyup"},{"frameCount":211,"keyCode":38,"event":"keydown"},{"frameCount":225,"keyCode":38,"event":"keyup"},{"frameCount":268,"keyCode":38,"event":"keydown"},{"frameCount":290,"keyCode":38,"event":"keyup"},{"frameCount":307,"keyCode":39,"event":"keyup"},{"frameCount":308,"keyCode":37,"event":"keydown"},{"frameCount":312,"keyCode":37,"event":"keyup"},{"frameCount":317,"keyCode":38,"event":"keydown"},{"frameCount":317,"keyCode":39,"event":"keydown"},{"frameCount":362,"keyCode":38,"event":"keyup"},{"frameCount":452,"keyCode":38,"event":"keydown"},{"frameCount":462,"keyCode":38,"event":"keyup"},{"frameCount":462,"keyCode":39,"event":"keyup"},{"frameCount":469,"keyCode":37,"event":"keydown"},{"frameCount":475,"keyCode":37,"event":"keyup"},{"frameCount":488,"keyCode":39,"event":"keydown"},{"frameCount":489,"keyCode":38,"event":"keydown"},{"frameCount":531,"keyCode":38,"event":"keyup"},{"frameCount":535,"keyCode":39,"event":"keyup"},{"frameCount":551,"keyCode":37,"event":"keydown"},{"frameCount":554,"keyCode":37,"event":"keyup"},{"frameCount":565,"keyCode":39,"event":"keydown"},{"frameCount":566,"keyCode":38,"event":"keydown"},{"frameCount":599,"keyCode":38,"event":"keyup"},{"frameCount":600,"keyCode":39,"event":"keyup"},{"frameCount":605,"keyCode":37,"event":"keydown"},{"frameCount":611,"keyCode":37,"event":"keyup"},{"frameCount":632,"keyCode":39,"event":"keydown"},{"frameCount":633,"keyCode":38,"event":"keydown"},{"frameCount":676,"keyCode":38,"event":"keyup"},{"frameCount":779,"keyCode":38,"event":"keydown"},{"frameCount":790,"keyCode":39,"event":"keyup"},{"frameCount":790,"keyCode":38,"event":"keyup"},{"frameCount":802,"keyCode":37,"event":"keydown"},{"frameCount":807,"keyCode":37,"event":"keyup"},{"frameCount":829,"keyCode":39,"event":"keydown"},{"frameCount":830,"keyCode":38,"event":"keydown"},{"frameCount":863,"keyCode":38,"event":"keyup"},{"frameCount":872,"keyCode":39,"event":"keyup"},{"frameCount":882,"keyCode":37,"event":"keydown"},{"frameCount":886,"keyCode":37,"event":"keyup"},{"frameCount":901,"keyCode":39,"event":"keydown"},{"frameCount":902,"keyCode":38,"event":"keydown"},{"frameCount":953,"keyCode":38,"event":"keyup"},{"frameCount":993,"keyCode":38,"event":"keydown"},{"frameCount":1016,"keyCode":38,"event":"keyup"},{"frameCount":1043,"keyCode":38,"event":"keydown"},{"frameCount":1064,"keyCode":38,"event":"keyup"},{"frameCount":1111,"keyCode":38,"event":"keydown"},{"frameCount":1129,"keyCode":38,"event":"keyup"},{"frameCount":1132,"keyCode":39,"event":"keyup"},{"frameCount":1142,"keyCode":37,"event":"keydown"},{"frameCount":1146,"keyCode":37,"event":"keyup"},{"frameCount":1160,"keyCode":39,"event":"keydown"},{"frameCount":1161,"keyCode":38,"event":"keydown"},{"frameCount":1202,"keyCode":38,"event":"keyup"},{"frameCount":1204,"keyCode":39,"event":"keyup"},{"frameCount":1212,"keyCode":37,"event":"keydown"},{"frameCount":1216,"keyCode":37,"event":"keyup"},{"frameCount":1228,"keyCode":38,"event":"keydown"},{"frameCount":1228,"keyCode":39,"event":"keydown"},{"frameCount":1291,"keyCode":38,"event":"keyup"},{"frameCount":1319,"keyCode":38,"event":"keydown"},{"frameCount":1344,"keyCode":38,"event":"keyup"},{"frameCount":1420,"keyCode":38,"event":"keydown"},{"frameCount":1432,"keyCode":38,"event":"keyup"},{"frameCount":1433,"keyCode":39,"event":"keyup"},{"frameCount":1447,"keyCode":37,"event":"keydown"},{"frameCount":1452,"keyCode":37,"event":"keyup"},{"frameCount":1476,"keyCode":39,"event":"keydown"},{"frameCount":1477,"keyCode":38,"event":"keydown"},{"frameCount":1503,"keyCode":38,"event":"keyup"},{"frameCount":1532,"keyCode":38,"event":"keydown"},{"frameCount":1555,"keyCode":38,"event":"keyup"},{"frameCount":1557,"keyCode":39,"event":"keyup"},{"frameCount":1569,"keyCode":37,"event":"keydown"},{"frameCount":1572,"keyCode":37,"event":"keyup"},{"frameCount":1596,"keyCode":39,"event":"keydown"},{"frameCount":1596,"keyCode":38,"event":"keydown"},{"frameCount":1645,"keyCode":38,"event":"keyup"},{"frameCount":1673,"keyCode":38,"event":"keydown"},{"frameCount":1703,"keyCode":38,"event":"keyup"},{"frameCount":1705,"keyCode":39,"event":"keyup"},{"frameCount":1725,"keyCode":37,"event":"keydown"},{"frameCount":1730,"keyCode":37,"event":"keyup"},{"frameCount":1739,"keyCode":39,"event":"keydown"},{"frameCount":1739,"keyCode":38,"event":"keydown"},{"frameCount":1781,"keyCode":38,"event":"keyup"},{"frameCount":1813,"keyCode":38,"event":"keydown"},{"frameCount":1831,"keyCode":38,"event":"keyup"},{"frameCount":1888,"keyCode":38,"event":"keydown"},{"frameCount":1920,"keyCode":38,"event":"keyup"},{"frameCount":1927,"keyCode":39,"event":"keyup"},{"frameCount":1944,"keyCode":37,"event":"keydown"},{"frameCount":1948,"keyCode":37,"event":"keyup"},{"frameCount":1961,"keyCode":39,"event":"keydown"},{"frameCount":1961,"keyCode":38,"event":"keydown"},{"frameCount":2035,"keyCode":39,"event":"keyup"},{"frameCount":2035,"keyCode":38,"event":"keyup"}]',
  '[{"frameCount": 60, "keyCode": 39, "event": "keydown"},{"frameCount":85,"keyCode":38,"event":"keyup"},{"frameCount":109,"keyCode":38,"event":"keydown"},{"frameCount":141,"keyCode":38,"event":"keyup"},{"frameCount":206,"keyCode":38,"event":"keydown"},{"frameCount":373,"keyCode":38,"event":"keyup"},{"frameCount":443,"keyCode":38,"event":"keydown"},{"frameCount":458,"keyCode":38,"event":"keyup"},{"frameCount":459,"keyCode":39,"event":"keyup"},{"frameCount":467,"keyCode":37,"event":"keydown"},{"frameCount":473,"keyCode":37,"event":"keyup"},{"frameCount":481,"keyCode":38,"event":"keydown"},{"frameCount":481,"keyCode":39,"event":"keydown"},{"frameCount":529,"keyCode":38,"event":"keyup"},{"frameCount":531,"keyCode":39,"event":"keyup"},{"frameCount":539,"keyCode":37,"event":"keydown"},{"frameCount":545,"keyCode":37,"event":"keyup"},{"frameCount":551,"keyCode":38,"event":"keydown"},{"frameCount":576,"keyCode":39,"event":"keydown"},{"frameCount":619,"keyCode":38,"event":"keyup"},{"frameCount":621,"keyCode":39,"event":"keyup"},{"frameCount":630,"keyCode":39,"event":"keydown"},{"frameCount":631,"keyCode":38,"event":"keydown"},{"frameCount":677,"keyCode":38,"event":"keyup"},{"frameCount":766,"keyCode":38,"event":"keydown"},{"frameCount":779,"keyCode":38,"event":"keyup"},{"frameCount":781,"keyCode":39,"event":"keyup"},{"frameCount":793,"keyCode":37,"event":"keydown"},{"frameCount":797,"keyCode":37,"event":"keyup"},{"frameCount":818,"keyCode":39,"event":"keydown"},{"frameCount":818,"keyCode":38,"event":"keydown"},{"frameCount":840,"keyCode":38,"event":"keyup"},{"frameCount":847,"keyCode":39,"event":"keyup"},{"frameCount":865,"keyCode":37,"event":"keydown"},{"frameCount":870,"keyCode":37,"event":"keyup"},{"frameCount":884,"keyCode":39,"event":"keydown"},{"frameCount":884,"keyCode":38,"event":"keydown"},{"frameCount":924,"keyCode":38,"event":"keyup"},{"frameCount":973,"keyCode":38,"event":"keydown"},{"frameCount":985,"keyCode":38,"event":"keyup"},{"frameCount":1026,"keyCode":38,"event":"keydown"},{"frameCount":1036,"keyCode":38,"event":"keyup"},{"frameCount":1094,"keyCode":38,"event":"keydown"},{"frameCount":1109,"keyCode":38,"event":"keyup"},{"frameCount":1114,"keyCode":39,"event":"keyup"},{"frameCount":1137,"keyCode":37,"event":"keydown"},{"frameCount":1141,"keyCode":37,"event":"keyup"},{"frameCount":1153,"keyCode":39,"event":"keydown"},{"frameCount":1154,"keyCode":38,"event":"keydown"},{"frameCount":1187,"keyCode":38,"event":"keyup"},{"frameCount":1188,"keyCode":39,"event":"keyup"},{"frameCount":1199,"keyCode":37,"event":"keydown"},{"frameCount":1204,"keyCode":37,"event":"keyup"},{"frameCount":1223,"keyCode":39,"event":"keydown"},{"frameCount":1224,"keyCode":38,"event":"keydown"},{"frameCount":1260,"keyCode":38,"event":"keyup"},{"frameCount":1301,"keyCode":38,"event":"keydown"},{"frameCount":1334,"keyCode":38,"event":"keyup"},{"frameCount":1398,"keyCode":38,"event":"keydown"},{"frameCount":1414,"keyCode":38,"event":"keyup"},{"frameCount":1417,"keyCode":39,"event":"keyup"},{"frameCount":1443,"keyCode":37,"event":"keydown"},{"frameCount":1447,"keyCode":37,"event":"keyup"},{"frameCount":1470,"keyCode":39,"event":"keydown"},{"frameCount":1470,"keyCode":38,"event":"keydown"},{"frameCount":1494,"keyCode":38,"event":"keyup"},{"frameCount":1518,"keyCode":38,"event":"keydown"},{"frameCount":1539,"keyCode":38,"event":"keyup"},{"frameCount":1542,"keyCode":39,"event":"keyup"},{"frameCount":1566,"keyCode":37,"event":"keydown"},{"frameCount":1570,"keyCode":37,"event":"keyup"},{"frameCount":1586,"keyCode":39,"event":"keydown"},{"frameCount":1586,"keyCode":38,"event":"keydown"},{"frameCount":1759,"keyCode":38,"event":"keyup"},{"frameCount":1764,"keyCode":39,"event":"keyup"},{"frameCount":1775,"keyCode":37,"event":"keydown"},{"frameCount":1781,"keyCode":37,"event":"keyup"},{"frameCount":1789,"keyCode":39,"event":"keydown"},{"frameCount":1815,"keyCode":38,"event":"keydown"},{"frameCount":1830,"keyCode":38,"event":"keyup"},{"frameCount":1897,"keyCode":38,"event":"keydown"},{"frameCount":1913,"keyCode":38,"event":"keyup"},{"frameCount":1925,"keyCode":39,"event":"keyup"},{"frameCount":1938,"keyCode":37,"event":"keydown"},{"frameCount":1942,"keyCode":37,"event":"keyup"},{"frameCount":1958,"keyCode":39,"event":"keydown"},{"frameCount":1960,"keyCode":38,"event":"keydown"},{"frameCount":2030,"keyCode":38,"event":"keyup"},{"frameCount":2030,"keyCode":39,"event":"keyup"}]',
  '[{"frameCount":7,"keyCode":39,"event":"keydown"},{"frameCount":7,"keyCode":38,"event":"keydown"},{"frameCount":15,"keyCode":38,"event":"keyup"},{"frameCount":53,"keyCode":38,"event":"keydown"},{"frameCount":61,"keyCode":38,"event":"keyup"},{"frameCount":112,"keyCode":38,"event":"keydown"},{"frameCount":118,"keyCode":38,"event":"keyup"},{"frameCount":180,"keyCode":38,"event":"keydown"},{"frameCount":187,"keyCode":38,"event":"keyup"},{"frameCount":236,"keyCode":38,"event":"keydown"},{"frameCount":242,"keyCode":38,"event":"keyup"},{"frameCount":261,"keyCode":40,"event":"keydown"},{"frameCount":267,"keyCode":40,"event":"keyup"},{"frameCount":283,"keyCode":38,"event":"keydown"},{"frameCount":289,"keyCode":38,"event":"keyup"},{"frameCount":307,"keyCode":40,"event":"keydown"},{"frameCount":314,"keyCode":40,"event":"keyup"},{"frameCount":372,"keyCode":38,"event":"keydown"},{"frameCount":378,"keyCode":38,"event":"keyup"},{"frameCount":388,"keyCode":40,"event":"keydown"},{"frameCount":395,"keyCode":40,"event":"keyup"},{"frameCount":405,"keyCode":38,"event":"keydown"},{"frameCount":411,"keyCode":38,"event":"keyup"},{"frameCount":424,"keyCode":40,"event":"keydown"},{"frameCount":433,"keyCode":40,"event":"keyup"},{"frameCount":457,"keyCode":38,"event":"keydown"},{"frameCount":462,"keyCode":38,"event":"keyup"},{"frameCount":511,"keyCode":38,"event":"keydown"},{"frameCount":518,"keyCode":38,"event":"keyup"},{"frameCount":539,"keyCode":40,"event":"keydown"},{"frameCount":573,"keyCode":40,"event":"keyup"},{"frameCount":610,"keyCode":38,"event":"keydown"},{"frameCount":652,"keyCode":38,"event":"keyup"},{"frameCount":675,"keyCode":38,"event":"keydown"},{"frameCount":681,"keyCode":38,"event":"keyup"},{"frameCount":741,"keyCode":38,"event":"keydown"},{"frameCount":749,"keyCode":38,"event":"keyup"},{"frameCount":769,"keyCode":40,"event":"keydown"},{"frameCount":777,"keyCode":40,"event":"keyup"},{"frameCount":782,"keyCode":38,"event":"keydown"},{"frameCount":788,"keyCode":38,"event":"keyup"},{"frameCount":796,"keyCode":40,"event":"keydown"},{"frameCount":804,"keyCode":40,"event":"keyup"},{"frameCount":841,"keyCode":38,"event":"keydown"},{"frameCount":846,"keyCode":38,"event":"keyup"},{"frameCount":856,"keyCode":40,"event":"keydown"},{"frameCount":870,"keyCode":40,"event":"keyup"},{"frameCount":879,"keyCode":38,"event":"keydown"},{"frameCount":886,"keyCode":38,"event":"keyup"},{"frameCount":902,"keyCode":40,"event":"keydown"},{"frameCount":913,"keyCode":40,"event":"keyup"},{"frameCount":925,"keyCode":38,"event":"keydown"},{"frameCount":934,"keyCode":38,"event":"keyup"},{"frameCount":943,"keyCode":40,"event":"keydown"},{"frameCount":952,"keyCode":40,"event":"keyup"},{"frameCount":1062,"keyCode":38,"event":"keydown"},{"frameCount":1063,"keyCode":39,"event":"keyup"},{"frameCount":1068,"keyCode":38,"event":"keyup"},{"frameCount":1078,"keyCode":37,"event":"keydown"},{"frameCount":1082,"keyCode":37,"event":"keyup"},{"frameCount":1100,"keyCode":39,"event":"keydown"},{"frameCount":1103,"keyCode":39,"event":"keyup"},{"frameCount":1117,"keyCode":38,"event":"keydown"},{"frameCount":1126,"keyCode":38,"event":"keyup"},{"frameCount":1127,"keyCode":39,"event":"keydown"},{"frameCount":1163,"keyCode":38,"event":"keydown"},{"frameCount":1173,"keyCode":38,"event":"keyup"},{"frameCount":1187,"keyCode":40,"event":"keydown"},{"frameCount":1196,"keyCode":40,"event":"keyup"},{"frameCount":1208,"keyCode":38,"event":"keydown"},{"frameCount":1219,"keyCode":38,"event":"keyup"},{"frameCount":1271,"keyCode":38,"event":"keydown"},{"frameCount":1277,"keyCode":38,"event":"keyup"},{"frameCount":1301,"keyCode":40,"event":"keydown"},{"frameCount":1309,"keyCode":40,"event":"keyup"},{"frameCount":1327,"keyCode":38,"event":"keydown"},{"frameCount":1336,"keyCode":38,"event":"keyup"},{"frameCount":1351,"keyCode":40,"event":"keydown"},{"frameCount":1357,"keyCode":40,"event":"keyup"},{"frameCount":1375,"keyCode":38,"event":"keydown"},{"frameCount":1384,"keyCode":38,"event":"keyup"},{"frameCount":1403,"keyCode":40,"event":"keydown"},{"frameCount":1433,"keyCode":40,"event":"keyup"},{"frameCount":1458,"keyCode":38,"event":"keydown"},{"frameCount":1465,"keyCode":38,"event":"keyup"},{"frameCount":1469,"keyCode":40,"event":"keydown"},{"frameCount":1479,"keyCode":40,"event":"keyup"},{"frameCount":1489,"keyCode":38,"event":"keydown"},{"frameCount":1498,"keyCode":38,"event":"keyup"}]',
];
LevelWalkThroughs = [
  null,
  '[{"frameCount":0,"keyCode":39,"event":"keydown"},{"frameCount":33,"keyCode":38,"event":"keydown"},{"frameCount":72,"keyCode":38,"event":"keyup"},{"frameCount":111,"keyCode":38,"event":"keydown"},{"frameCount":143,"keyCode":38,"event":"keyup"},{"frameCount":211,"keyCode":38,"event":"keydown"},{"frameCount":225,"keyCode":38,"event":"keyup"},{"frameCount":268,"keyCode":38,"event":"keydown"},{"frameCount":290,"keyCode":38,"event":"keyup"},{"frameCount":307,"keyCode":39,"event":"keyup"},{"frameCount":308,"keyCode":37,"event":"keydown"},{"frameCount":312,"keyCode":37,"event":"keyup"},{"frameCount":317,"keyCode":38,"event":"keydown"},{"frameCount":317,"keyCode":39,"event":"keydown"},{"frameCount":362,"keyCode":38,"event":"keyup"},{"frameCount":452,"keyCode":38,"event":"keydown"},{"frameCount":462,"keyCode":38,"event":"keyup"},{"frameCount":462,"keyCode":39,"event":"keyup"},{"frameCount":469,"keyCode":37,"event":"keydown"},{"frameCount":475,"keyCode":37,"event":"keyup"},{"frameCount":488,"keyCode":39,"event":"keydown"},{"frameCount":489,"keyCode":38,"event":"keydown"},{"frameCount":531,"keyCode":38,"event":"keyup"},{"frameCount":535,"keyCode":39,"event":"keyup"},{"frameCount":551,"keyCode":37,"event":"keydown"},{"frameCount":554,"keyCode":37,"event":"keyup"},{"frameCount":565,"keyCode":39,"event":"keydown"},{"frameCount":566,"keyCode":38,"event":"keydown"},{"frameCount":599,"keyCode":38,"event":"keyup"},{"frameCount":600,"keyCode":39,"event":"keyup"},{"frameCount":605,"keyCode":37,"event":"keydown"},{"frameCount":611,"keyCode":37,"event":"keyup"},{"frameCount":632,"keyCode":39,"event":"keydown"},{"frameCount":633,"keyCode":38,"event":"keydown"},{"frameCount":676,"keyCode":38,"event":"keyup"},{"frameCount":779,"keyCode":38,"event":"keydown"},{"frameCount":790,"keyCode":39,"event":"keyup"},{"frameCount":790,"keyCode":38,"event":"keyup"},{"frameCount":802,"keyCode":37,"event":"keydown"},{"frameCount":807,"keyCode":37,"event":"keyup"},{"frameCount":829,"keyCode":39,"event":"keydown"},{"frameCount":830,"keyCode":38,"event":"keydown"},{"frameCount":863,"keyCode":38,"event":"keyup"},{"frameCount":872,"keyCode":39,"event":"keyup"},{"frameCount":882,"keyCode":37,"event":"keydown"},{"frameCount":886,"keyCode":37,"event":"keyup"},{"frameCount":901,"keyCode":39,"event":"keydown"},{"frameCount":902,"keyCode":38,"event":"keydown"},{"frameCount":953,"keyCode":38,"event":"keyup"},{"frameCount":993,"keyCode":38,"event":"keydown"},{"frameCount":1016,"keyCode":38,"event":"keyup"},{"frameCount":1043,"keyCode":38,"event":"keydown"},{"frameCount":1064,"keyCode":38,"event":"keyup"},{"frameCount":1111,"keyCode":38,"event":"keydown"},{"frameCount":1129,"keyCode":38,"event":"keyup"},{"frameCount":1132,"keyCode":39,"event":"keyup"},{"frameCount":1142,"keyCode":37,"event":"keydown"},{"frameCount":1146,"keyCode":37,"event":"keyup"},{"frameCount":1160,"keyCode":39,"event":"keydown"},{"frameCount":1161,"keyCode":38,"event":"keydown"},{"frameCount":1202,"keyCode":38,"event":"keyup"},{"frameCount":1204,"keyCode":39,"event":"keyup"},{"frameCount":1212,"keyCode":37,"event":"keydown"},{"frameCount":1216,"keyCode":37,"event":"keyup"},{"frameCount":1228,"keyCode":38,"event":"keydown"},{"frameCount":1228,"keyCode":39,"event":"keydown"},{"frameCount":1291,"keyCode":38,"event":"keyup"},{"frameCount":1319,"keyCode":38,"event":"keydown"},{"frameCount":1344,"keyCode":38,"event":"keyup"},{"frameCount":1420,"keyCode":38,"event":"keydown"},{"frameCount":1432,"keyCode":38,"event":"keyup"},{"frameCount":1433,"keyCode":39,"event":"keyup"},{"frameCount":1447,"keyCode":37,"event":"keydown"},{"frameCount":1452,"keyCode":37,"event":"keyup"},{"frameCount":1476,"keyCode":39,"event":"keydown"},{"frameCount":1477,"keyCode":38,"event":"keydown"},{"frameCount":1503,"keyCode":38,"event":"keyup"},{"frameCount":1532,"keyCode":38,"event":"keydown"},{"frameCount":1555,"keyCode":38,"event":"keyup"},{"frameCount":1557,"keyCode":39,"event":"keyup"},{"frameCount":1569,"keyCode":37,"event":"keydown"},{"frameCount":1572,"keyCode":37,"event":"keyup"},{"frameCount":1596,"keyCode":39,"event":"keydown"},{"frameCount":1596,"keyCode":38,"event":"keydown"},{"frameCount":1645,"keyCode":38,"event":"keyup"},{"frameCount":1673,"keyCode":38,"event":"keydown"},{"frameCount":1703,"keyCode":38,"event":"keyup"},{"frameCount":1705,"keyCode":39,"event":"keyup"},{"frameCount":1725,"keyCode":37,"event":"keydown"},{"frameCount":1730,"keyCode":37,"event":"keyup"},{"frameCount":1739,"keyCode":39,"event":"keydown"},{"frameCount":1739,"keyCode":38,"event":"keydown"},{"frameCount":1781,"keyCode":38,"event":"keyup"},{"frameCount":1813,"keyCode":38,"event":"keydown"},{"frameCount":1831,"keyCode":38,"event":"keyup"},{"frameCount":1888,"keyCode":38,"event":"keydown"},{"frameCount":1920,"keyCode":38,"event":"keyup"},{"frameCount":1927,"keyCode":39,"event":"keyup"},{"frameCount":1944,"keyCode":37,"event":"keydown"},{"frameCount":1948,"keyCode":37,"event":"keyup"},{"frameCount":1961,"keyCode":39,"event":"keydown"},{"frameCount":1961,"keyCode":38,"event":"keydown"},{"frameCount":2035,"keyCode":39,"event":"keyup"},{"frameCount":2035,"keyCode":38,"event":"keyup"}]',
];
let keyBankIndex = null;
let keyBank;

document.body.addEventListener("keydown", function (e) {
  keyPressed(e.keyCode);

  if (keys.active[e.keyCode] || keyBank) return;
  keyLog.push({
    frameCount: frameCount + 1,
    keyCode: e.keyCode,
    event: "keydown",
  });
  keys.active[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keyUnPressed(e.keyCode);

  if (!keys.active[e.keyCode] || keyBank) return;
  keyLog.push({
    frameCount: frameCount + 1,
    keyCode: e.keyCode,
    event: "keyup",
  });
  keys.active[e.keyCode] = false;
});

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (is_touch_enabled()) {
  managerLT = nipplejs.create(optionsLT);
  managerRT = nipplejs.create(optionsRT);
  managerLT.on("plain:up", () => {
    keys.active[keys.up] = true;
    keys.active[keys.down] = false;
  });
  managerLT.on("plain:down", () => {
    keys.active[keys.up] = false;
    keys.active[keys.down] = true;
  });
  managerLT.on("move", (e, data) => {
    if (data.distance < 20) {
      keys.active[keys.up] = false;
      keys.active[keys.down] = false;
    }
  });
  managerLT.on("end", () => {
    keys.active[keys.up] = false;
    keys.active[keys.down] = false;
  });

  managerRT.on("plain:right", () => {
    keys.active[keys.right] = true;
    keys.active[keys.left] = false;
  });
  managerRT.on("plain:left", () => {
    keys.active[keys.right] = false;
    keys.active[keys.left] = true;
  });
  managerRT.on("move", (e, data) => {
    if (data.distance < 10) {
      keys.active[keys.right] = false;
      keys.active[keys.left] = false;
    }
  });
  managerRT.on("end", () => {
    keys.active[keys.right] = false;
    keys.active[keys.left] = false;
  });
} else {
  document.getElementById("jsrt").style = "display: none;";
  document.getElementById("jslt").style = "display: none;";
}
//mouse
mouse = {
  x: 0,
  y: 0,
  down: false,
  button: -1,
};

document.body.addEventListener(
  "mousemove",
  function (evt) {
    var rect = db1.getBoundingClientRect();

    mouse.x = Math.floor(evt.clientX - rect.left);
    mouse.y = Math.floor(evt.clientY - rect.top);
    mouseMoved();
  },
  false
);
document.body.onmousedown = function (e) {
  mouse.ax = mouse.x;
  mouse.ay = mouse.y;
  mouse.down = true;
  mouse.button = e.button;
  mouseClick();
};
document.body.onmouseup = function (e) {
  mouse.down = false;
  mouseUnClick();
};

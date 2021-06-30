var td_1V = td_1V || {};
td_1V.td_4M = function (td_U, td_V) {
  var td_f = [""];
  var td_j = 0;
  for (var td_i = 0; td_i < td_V.length; ++td_i) {
    td_f.push(String.fromCharCode(td_U.charCodeAt(td_j) ^ td_V.charCodeAt(td_i)));
    td_j++;
    if (td_j >= td_U.length) {
      td_j = 0;
    }
  }
  return td_f.join("");
};
td_1V.td_3x = function (td_p) {
  this.td_c = td_p;
  this.td_d = "";
  this.td_f = function (td_P, td_L) {
    if (0 === this.td_d.length) {
      var td_m = this.td_c.substr(0, 32);
      var td_I = "";
      for (var td_X = 32; td_X < td_p.length; td_X += 2) {
        td_I += String.fromCharCode(parseInt(td_p.substr(td_X, 2), 16));
      }
      this.td_d = td_1V.td_4M(td_m, td_I);
    }
    return this.td_d.substr(td_P, td_L);
  };
};
td_1V.td_3s = function (td_E) {
  if (td_E === null || td_E.length === null) {
    return null;
  }
  var td_d = null;
  try {
    var td_w = "";
    var td_f = [];
    var td_m = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
    var td_b = 0;
    for (var td_h = 0; td_h < td_E.length; ++td_h) {
      if (65 + td_b >= 126) {
        td_b = 0;
      }
      var td_L = (td_m + td_E.charCodeAt(td_b++)).slice(-3);
      td_f.push(td_L);
    }
    var td_r = td_f.join("");
    td_b = 0;
    for (var td_h = 0; td_h < td_r.length; ++td_h) {
      if (65 + td_b >= 126) {
        td_b = 0;
      }
      var td_H = String.fromCharCode(65 + td_b++);
      if (td_H !== "undefined") {
        td_w += td_H;
      }
    }
    td_d = td_1V.td_4M(td_w, td_r);
  } catch (td_A) {
    return null;
  }
  return td_d;
};
td_1V.td_2V = function (td_a) {
  if (td_a === null || td_a.length === null) {
    return null;
  }
  var td_y = "";
  try {
    var td_C = "";
    var td_c = 0;
    for (var td_x = 0; td_x < td_a.length; ++td_x) {
      if (65 + td_c >= 126) {
        td_c = 0;
      }
      var td_g = String.fromCharCode(65 + td_c++);
      if (td_g !== "undefined") {
        td_C += td_g;
      }
    }
    var td_q = td_1V.td_4M(td_C, td_a);
    var td_O = td_q.match(/.{1,3}/g);
    for (var td_x = 0; td_x < td_O.length; ++td_x) {
      td_y += String.fromCharCode(parseInt(td_O[td_x], 10));
    }
  } catch (td_E) {
    return null;
  }
  return td_y;
};
td_1V.tdz_838f76508b4f4f6dac27ea6d4043dc24 = new td_1V.td_3x("838f76508b4f4f6dac27ea6d4043dc245e52541552574540540b5707400f590a4e1b1f440d0e550f4351425649055e554b5b5916475a5c5359165d095a4950111516405216115a0547585543140f5b575947510959194d1d551258074d0344560013425b0c0257105d5f5a1c05104a554843540f54574159570c1b1650000e4a514c5e56110444125d54515c4b12475d5b584c0f5a535440480e5d0555125f0b0f4c4a1a14145f075f445d5e01135e5541564a0f5a575255171a190b55054605080d465e080051011b481942110a515f4c5a55035646455c510155125d09584b194e565e170455105b425543140f5b57594751095919435e5c4c4608191453050d135e561c0444495e5142521700405d48470d4807574540540b5707400f590a4e1b1f4109021b145845535a0a024244545a5b07435f5a5e171a19025110570817114a5e080051011b434254491b5f58515e5901521946465f494c0b580746140d0a51561108590a1b481959051553195943480a52425440480e5d0555125f0b0f4c4a1a0f0040051946595214135e5d5b524c0f58581a4815085510554b5401000d615f0a025d13554651750802415c16605009545d42514e07720a55155e050d14534e16571a541802051f544744514a4051095941584054034d0346485907193376714b1152027744465f2500405b68777e486772731e094c05521a56014a514c5e561104443541595758300a5f5116624d0f545d61595507673177125a4a32347143091242165d5e531d5c4d05755b475110526e7a5252075712440a4303080d6d510900450c6a405846030a5c6b4f5a56025841466f5507500f55394608001a57453b115a1153595a6c05075d565d6c5905455957514c3c440a41015f0a3e12475e060a420d59556a430816555d566c4b0e58555e4759145138440a4303080d6d4500005a1458514d56163d42584d54510868405953671258074d03443a110f47500c0f69005146555f12116c4454465f0f596946465f3d420f511153163f135e420208583b5e5142523a");
function td_yj(td_NO) {
  var td_ki = td_NO.constructor == String ? [td_NO] : td_NO;
  var td_gT = "false";
  var td_Mu = "false";
  var td_rC;
  for (td_rC = 0; td_rC < td_ki.length; td_rC++) {
    var td_Cv = td_iS[td_ki[td_rC]];
    if (td_Cv && td_Cv.enabledPlugin) {
      var td_AE = td_Cv.enabledPlugin;
      if (td_AE.name) {
        td_gT = td_AE.name;
      } else {
        td_gT = "true";
      }
      td_Mu = td_AE.description;
      break;
    }
  }
  return [td_gT, td_Mu];
}
function td_ut() {
  var td_rH = "false";
  var td_Tv = td_yj(["application/x-shockwave-flash", "application/futuresplash"]);
  var td_BS = td_Tv[0];
  var td_cc = td_Tv[1];
  if (td_BS !== "false" && td_BS !== "true" && /Flash/i.test(td_BS)) {
    td_rH = "true";
  }
  if (td_rH === "true" && td_cc) {
    var td_yS = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_cc);
    if (td_yS) {
      td_rH = td_yS[0];
    }
  }
  return td_rH;
}
function td_dJ() {
  var td_as = "false";
  var td_jW = td_yj(["application/x-mplayer2", "application/asx"]);
  var td_uV = td_jW[0];
  if (td_uV !== "false" && td_uV !== "true" && /Windows.*Media.*Firefox Plugin.*/i.test(td_uV)) {
    td_as = "true";
  }
  return td_as;
}
function td_V7() {
  var td_XY = "false";
  var td_ce = td_yj(["application/pdf"]);
  var td_jW = td_ce[0];
  var td_XT = td_ce[1];
  if (td_jW !== "false" && td_jW !== "true" && /Adobe Acrobat/i.test(td_jW)) {
    td_XY = "true";
  }
  if (td_XY === "true" && td_XT) {
    var td_B5 = /[\d][\d\.\_,-]*/.exec(td_XT);
    if (td_B5) {
      td_XY = td_B5[0];
    } else {
      td_XY = "8.0/later";
    }
  }
  return td_XY;
}
function td_Kl() {
  var td_NJ = "false";
  if (navigator.platform && /linux/i.test(navigator.platform)) {
    td_NJ = "false";
  } else {
    var td_sx = td_yj(["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"]);
    var td_LF = td_sx[0];
    if (td_LF !== "false" && td_LF !== "true" && /QuickTime.*(Plug-in|Plugin).*/i.test(td_LF)) {
      td_NJ = "true";
      var td_Eg = /[\d][\d\.\_,-]*/.exec(td_LF);
      if (td_Eg) {
        td_NJ = td_Eg[0];
      }
    }
  }
  return td_NJ;
}
function td_Iu() {
  var td_EJ = "false";
  var td_qg = td_yj(["application/x-director"]);
  var td_Ap = td_qg[0];
  var td_uj = td_qg[1];
  if (td_Ap !== "false" && td_Ap !== "true" && /Shockwave for Director/i.test(td_Ap)) {
    td_EJ = "true";
  }
  if (td_EJ === "true" && td_uj) {
    var td_NB = /[\d][\d\.\_,-]*/.exec(td_uj);
    if (td_NB) {
      td_EJ = td_NB[0];
    }
  }
  return td_EJ;
}
function td_UY() {
  var td_IA = "false";
  var td_Ai = td_yj(["application/vnd.rn-realplayer-javascript"]);
  var td_I6 = td_Ai[0];
  var td_q2 = td_Ai[1];
  if (td_I6 !== "false" && td_I6 !== "true" && /RealPlayer.*Version.*/i.test(td_I6)) {
    td_IA = "true";
  }
  if (td_IA === "true" && td_q2) {
    var td_KD = /[\d][\d\.\_,-]*/.exec(td_q2);
    if (td_KD) {
      td_IA = td_KD[0];
    } else {
      td_IA = "5.0";
    }
  }
  return td_IA;
}
function td_We() {
  var td_rm = "false";
  var td_bk = td_yj(["application/x-vlc-plugin"]);
  var td_MX = td_bk[0];
  var td_Dd = td_bk[1];
  if (td_MX !== "false" && td_MX !== "true" && /VLC.*(Plug-in|Plugin).*/i.test(td_MX)) {
    td_rm = "true";
  }
  if (td_rm === "true" && td_Dd) {
    var td_vl = /(Version) ([\d][\d\.]*[a-z]*)/.exec(td_Dd);
    if (td_vl) {
      td_rm = td_vl[2];
    }
  }
  return td_rm;
}
function td_bL() {
  var td_pi = "false";
  var td_Yh = td_yj(["application/x-devalvrx"]);
  var td_CE = td_Yh[0];
  var td_J2 = td_Yh[1];
  if (td_CE !== "false" && td_CE !== "true" && /DevalVR/i.test(td_CE)) {
    td_pi = "true";
  }
  if (td_pi === "true" && td_J2) {
    var td_Mt = /(Plugin) ([\d][\d\.\,]*)/.exec(td_J2);
    if (td_Mt) {
      td_pi = td_Mt[2];
    }
  }
  return td_pi;
}
function td_Ph() {
  var td_i5 = "false";
  var td_oO = td_yj(["image/svg-xml", "image/svg+xml"]);
  var td_wU = td_oO[0];
  var td_r2 = td_oO[1];
  if (td_wU !== "false" && td_wU !== "true" && /SVG Viewer/i.test(td_wU)) {
    td_i5 = "true";
  }
  if (td_i5 === "true" && td_r2) {
    var td_MS = /[\d][\d\.]*/.exec(td_r2);
    if (td_MS) {
      td_i5 = td_MS[0];
    }
  }
  return td_i5;
}
function td_Jc() {
  var td_Wf = "false";
  var td_fe = td_yj(["application/x-java-applet", "application/x-java-vm", "application/x-java-bean"]);
  var td_Xa = td_fe[0];
  var td_mf = td_fe[1];
  if (td_Xa !== "false" && td_Xa !== "true" && /Java/i.test(td_Xa)) {
    td_Wf = "true";
  }
  if (td_Wf === "true" && td_mf) {
    var td_nd = /[\d][\d\._]*/.exec(td_mf);
    if (td_nd) {
      td_Wf = td_nd[0];
    }
  }
  return td_Wf;
}
function td_FG(td_B8, td_hd) {
  var td_z1 = null;
  var td_li = false;
  try {
    td_z1 = new ActiveXObject(td_B8);
    td_li = true;
  } catch (td_lb) {}
  if (typeof td_hd !== "undefined") {
    return td_li;
  }
  return td_z1;
}
function td_qM() {
  var td_WG = "ShockwaveFlash.ShockwaveFlash";
  var td_nD, td_Ob = null, td_cU = null, td_ay = null;
  var td_cg = 15;
  var td_Bw = 2;
  for (td_nD = td_cg; td_nD > td_Bw; td_nD--) {
    td_cU = td_FG(td_WG + "." + td_nD);
    if (td_cU) {
      td_Ob = td_nD.toString();
      break;
    }
  }
  if (td_Ob === "6") {
    try {
      td_cU.AllowScriptAccess = "always";
    } catch (td_kW) {
      td_ay = "6,0,21,0";
    }
  } else {
    if (td_cU) {
      try {
        td_ay = td_cU.GetVariable("$version");
        var td_Qy = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_ay);
        if (td_Qy) {
          td_ay = td_Qy[0];
        } else {
          td_ay = "true";
        }
      } catch (td_kW) {
        td_ay = "true";
      }
    }
  }
  if (!td_ay && td_Ob) {
    td_ay = td_Ob;
  }
  if (!td_ay) {
    td_ay = "false";
  }
  return td_ay;
}
function td_dR() {
  var td_c8 = "wmplayer.ocx";
  var td_Wt = "false";
  var td_Jv = td_FG(td_c8);
  if (td_Jv) {
    td_Wt = td_Jv.versionInfo;
  }
  return td_Wt;
}
function td_kv() {
  var td_G9 = "PDF.pdfCtrl";
  var td_Az = "AcroPDF.PDF.1";
  var td_xh;
  var td_gC = "false";
  var td_fy = td_FG(td_Az);
  if (!td_fy) {
    var td_dp = 10;
    var td_ts = 1;
    for (td_xh = td_dp; td_xh > td_ts; td_xh--) {
      td_fy = td_FG(td_G9 + "." + td_xh);
      if (td_fy) {
        td_gC = td_gC.toString();
        break;
      }
    }
    if (!td_fy) {
      td_fy = td_FG(td_G9 + ".1");
      if (td_fy) {
        td_gC = "4.0";
      }
    }
  } else {
    td_gC = "7.0/later";
  }
  return td_gC;
}
function td_Gh() {
  var td_i6 = "QuickTime.QuickTime";
  var td_Fa = "false";
  var td_rX = null;
  try {
    td_rX = td_FG(td_i6);
  } catch (td_vu) {}
  if (td_rX) {
    if (td_rX.QuickTimeVersion) {
      td_Fa = td_rX.QuickTimeVersion.toString(16);
      td_Fa = td_Fa.charAt(0) + "." + td_Fa.charAt(1) + "." + td_Fa.charAt(2);
    } else {
      td_Fa = "true";
    }
  }
  return td_Fa;
}
function td_S9() {
  var td_t2 = "SWCtl.SWCtl";
  var td_hE = "false", td_g2 = null, td_LU;
  try {
    td_g2 = td_FG(td_t2).ShockwaveVersion("");
  } catch (td_LU) {}
  if (typeof td_g2 === "string" && td_g2.length > 0) {
    td_hE = td_g2;
  } else {
    if (td_FG(td_t2 + ".8", 1)) {
      td_hE = "8";
    } else {
      if (td_FG(td_t2 + ".7", 1)) {
        td_hE = "7";
      } else {
        if (td_FG(td_t2 + ".1", 1)) {
          td_hE = "6";
        }
      }
    }
  }
  return td_hE;
}
function td_3R() {
  var td_yw = 0;
  var td_pt;
  var td_UC = "false";
  var td_Ej = "false";
  var td_ia = "false";
  var td_DU = "false";
  var td_eG = "false";
  var td_gk = "false";
  var td_wc = "false";
  var td_Wb = "false";
  var td_wT = "false";
  var td_YU = "false";
  if (td_iS && td_iS.length) {
    td_yw = td_iS.length;
  }
  if (window.ActiveXObject || "ActiveXObject" in window) {
    if (td_yw > 0) {
      td_UC = td_ut();
    }
    if (td_UC === "false") {
      td_UC = td_qM();
    }
    td_Ej = td_dR();
    td_ia = td_kv();
    td_DU = td_Gh();
    td_eG = td_S9();
  } else {
    if (td_yw > 0) {
      td_UC = td_ut();
      td_Ej = td_dJ();
      td_ia = td_V7();
      td_DU = td_Kl();
      td_eG = td_Iu();
      td_gk = td_UY();
      td_wc = td_We();
      td_Wb = td_bL();
      td_wT = td_Ph();
      td_YU = td_Jc();
    }
  }
  td_pt = "plugin_flash^" + td_UC + "!";
  td_pt += "plugin_windows_media_player^" + td_Ej + "!";
  td_pt += "plugin_adobe_acrobat^" + td_ia + "!";
  td_pt += "plugin_quicktime^" + td_DU + "!";
  td_pt += "plugin_shockwave^" + td_eG + "!";
  td_pt += "plugin_realplayer^" + td_gk + "!";
  td_pt += "plugin_vlc_player^" + td_wc + "!";
  td_pt += "plugin_devalvr^" + td_Wb + "!";
  td_pt += "plugin_svg_viewer^" + td_wT + "!";
  td_pt += "plugin_java^" + td_YU;
  return td_pt;
}
td_1V.tdz_9d310a43843445818262490e5c196c34 = new td_1V.td_3x("9d310a43843445818262490e5c196c344d00416e4302465a48406077667c6865515642574c4d1f0f5415504a55115a444d085c50540450505759435851415d424a515f5f53707d22540f455c5b13474d4a104a5d55175d4051565a585d41410b505b52565157");
function td_1W(td_i) {
  var td_l = "";
  var td_k = function () {
    var td_f = Math.floor(Math.random() * 62);
    if (td_f < 10) {
      return td_f;
    }
    if (td_f < 36) {
      return String.fromCharCode(td_f + 55);
    }
    return String.fromCharCode(td_f + 61);
  };
  while (td_l.length < td_i) {
    td_l += td_k();
  }
  return "tdr_" + td_l;
}
function td_3Z(td_k) {
  var td_p = td_1W(5);
  if (typeof td_4x !== "undefined") {
    td_4x(td_p, td_k);
  }
  return td_p;
}
function td_1X(td_p, td_z, td_P) {
  var td_B = td_z.getElementsByTagName("head").item(0);
  var td_J = td_z.createElement("script");
  var td_V = td_3Z("SCRIPT");
  td_J.setAttribute("id", td_V);
  td_J.setAttribute("type", "text/javascript");
  td_1V.td_2H(td_J);
  if (typeof td_P !== "undefined") {
    var td_a = false;
    td_J.onload = td_J.onreadystatechange = function () {
      if (!td_a && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        td_a = true;
        td_P();
      }
    };
    td_J.onerror = function (td_W) {
      td_a = true;
      td_P();
    };
  }
  td_J.setAttribute("src", td_p);
  td_B.appendChild(td_J);
}
function td_3T(td_T, td_o, td_W, td_D) {
  var td_g = td_D.createElement("img");
  var td_k = td_3Z("IMG");
  td_g.setAttribute("id", td_k);
  td_g.setAttribute("alt", "empty");
  td_g.setAttribute("style", "visibility:hidden");
  td_g.setAttribute("src", td_o);
  if (typeof td_W !== "undefined") {
    td_g.onload = td_W;
    td_g.onabort = td_W;
    td_g.onerror = td_W;
    td_g.oninvalid = td_W;
  }
  td_T.appendChild(td_g);
}
function td_1M(td_f, td_u) {
  var td_g = td_u.getElementsByTagName("head")[0];
  td_3T(td_g, td_f, null, td_u);
}
td_1V.tdz_5261216e5fa14b6fab45ceae03229705 = new td_1V.td_3x("5261216e5fa14b6fab45ceae03229705704a465d5d435317620f0f555b154531282c7954002820260101051c0919001b046d5941575f0c5f155c416e51104409133d57590c1604124340081d1668595b41574447535d440108401355405f100c045f514302093e035e6c0346544f5d5046415756575444175a14025d5b11531112110e1a4c5453521e031c0217060a71746677757d7f7334602333687d2c7f32332767602f3125246472717d6c7964617c7f737e6765410441050954463d5916040c435417060900426c57404b5842425446555957436906590912545a175b0404101418431108085513574a5a525551505645545e571828703532707327165b414047500f034f2a60767c1204171246505e501f7763642a67465c111611530a074c77792c3624450d1310415c5b561b7c7c627460677729155b411347075a004f317b76282035450d1310415c5b561b71736270120c164746030d571a367f2b24276c762620252074130f121b445559531c657462110b451715045d524c66293236796624212e2b75130f121b445559531c667e61657b3672373474663b165b414047500f034f2c7e7a661204171246505e501f607465307932410c144045030d041a71223120267f667c66190a101746575a571c72622c78232e6460420b4643115159054b362a60767c1204171246505e501f657464377a34410c144045030d041a6220292e3675130f121b445559531c78647f737337155b4113400f4e480507564004455c45445e4a1c4d45515650120b1144504445410b19110942420b19424849431e1c5e101c1d5c585a554645535554534146095c0500455d0d58490b0342541006130c40475d5053525341735b4454545e4e");
var td_1V = td_1V || {};
function td_0e(td_uo, td_WQ, td_o4) {
  var td_hL = [];
  var td_sm = 0;
  var td_Dn = [];
  this.timeout = 1500;
  this.validate = false;
  this.isValid = function () {
    return this.validate;
  };
  if (typeof WebSocket === "undefined") {
    return;
  }
  var td_MJ = 0;
  var td_pF = 0;
  if (td_4O.td_1t === "Explorer") {
    td_MJ = 2500;
    td_pF = 6;
  } else {
    td_MJ = 1500;
    td_pF = 128;
  }
  var td_eH = 3 * td_MJ;
  var td_Up = function (td_c1, td_Gk, td_tQ, td_Su, td_BV, td_fg) {
    if (typeof td_tQ === "undefined" || typeof td_fg === "undefined") {
      return false;
    }
    if (td_fg < td_tQ / 2) {
      return true;
    }
    return false;
  };
  if (td_uo === "Windows") {
    this.os = "WIN";
  } else {
    if (td_uo === "Mac") {
      this.os = "MAC";
    } else {
      this.os = td_uo;
    }
  }
  this.browser = td_WQ;
  this.ip = "127.0.0.1";
  this.scanPorts = [];
  for (var td_fz = 0; td_fz < td_o4.length; td_fz++) {
    var td_fG = td_o4[td_fz].split(":");
    var td_Es;
    if (td_fG.length === 1) {
      td_Es = td_fG[0];
    } else {
      if (td_fG.length === 2) {
        td_Es = td_fG[1];
      } else {
        if (td_fG.length === 3) {
          td_Es = td_fG[2];
        } else {
          continue;
        }
      }
    }
    if (this.os !== "WIN") {
      continue;
    }
    this.scanPorts.push([td_Es, td_Up]);
  }
  if (this.scanPorts.length > 1) {
    this.validate = true;
  }
  if (this.validate === false) {
    return;
  }
  var td_Kp = this;
  var td_LF;
  var td_Ut = 0;
  var td_Pm = 0;
  var td_dp;
  var td_TB = {};
  var td_iq = this.scanPorts.length;
  var td_FQ = function (td_Pz) {
    td_TB[td_Ut + "_open"] = true;
    if (td_1V.hasDebug) {
      var td_Tj = "";
      for (var td_sr in td_Pz) {
        td_Tj += "::" + td_sr + " : " + td_Pz[td_sr];
      }
    }
  };
  var td_PX = function (td_Lu) {
    td_TB[td_Ut + "_error"] = true;
  };
  var td_Fx = function (td_a5) {
    td_TB[td_Ut + "_close"] = true;
  };
  function td_f1() {
    if (!td_Az()) {
      return;
    }
    td_LF = td_g();
    try {
      td_dp = new WebSocket("wss://" + td_Kp.ip + ":" + td_Ut);
      td_dp.onerror = td_PX;
      td_dp.onopen = td_FQ;
      td_dp.onclose = td_Fx;
      setTimeout(td_hU, 5);
    } catch (td_bc) {
      return;
    }
  }
  function td_hU() {
    var td_gq = td_g() - td_LF;
    if (td_dp.readyState === 0) {
      if (td_gq > td_MJ) {
        td_TB[td_Ut + "_interval"] = td_MJ;
        td_dp.close();
        td_dp = null;
        td_LF = td_g();
        setTimeout(td_f1, 1);
      } else {
        setTimeout(td_hU, 5);
      }
    } else {
      td_TB[td_Ut + "_interval"] = td_gq;
      td_dp.close();
      td_dp = null;
      setTimeout(td_f1, 1);
    }
  }
  function td_Az() {
    if (td_Pm >= td_Kp.scanPorts.length) {
      td_Tm();
      return false;
    }
    td_Ut = td_Kp.scanPorts[td_Pm++][0];
    return true;
  }
  function td_Tm() {
    var td_ep = [];
    var td_Lx = td_TB[td_Kp.scanPorts[0][0] + "_error"];
    var td_mt = td_TB[td_Kp.scanPorts[0][0] + "_close"];
    var td_ga = td_TB[td_Kp.scanPorts[0][0] + "_interval"];
    var td_it = td_Kp.scanPorts[0][0] + "-" + td_ga;
    for (var td_hR = 1; td_hR < td_Kp.scanPorts.length; td_hR++) {
      var td_jZ = td_TB[td_Kp.scanPorts[td_hR][0] + "_error"];
      var td_wt = td_TB[td_Kp.scanPorts[td_hR][0] + "_close"];
      var td_IO = td_TB[td_Kp.scanPorts[td_hR][0] + "_interval"];
      if (td_Kp.scanPorts[td_hR][1](td_Lx, td_mt, td_ga, td_jZ, td_wt, td_IO)) {
        var td_xh = td_Kp.scanPorts[td_hR][0];
        td_ep.push(td_xh);
      }
      td_it += "," + td_Kp.scanPorts[td_hR][0] + "-" + td_IO;
    }
    var td_II = "rd=" + td_ep.join() + "&rdt=" + td_it;
    var td_Jf = td_2L + "&je=" + td_1V.td_0i(td_II, td_0M);
    td_1X(td_Jf, document);
    if (td_1V.hasTrace) {
      for (var td_PP in td_TB) {
        if (td_TB.hasOwnProperty(td_PP)) {}
      }
    }
  }
  function td_Rw() {
    self.GLOBREPLACE = "eval_fn_1";
    self.REPLACEVAL = "tmx";
    self.MESSAGE = "message";
    self.OPEN = "open";
    self.ERROR = "error";
    self.CLOSE = "close";
    self.INTERVAL = "_interval";
    self.SOCKET = "wss://127.0.0.1:";
    self.DATA = "DATA";
    self.POSTMSGDONE = "DONE";
    self.POSTMSGQUERY = "QUERY";
    self.INIT = "INIT";
    self.RESULT = "RESULT";
    self.DATACOUNT = "DATACOUNT";
    self.CTIMEOUT = "TIMEOUT";
    self.WOPEN = "watcher_open";
    self.WERROR = "watcher_error";
    self.WCLOSE = "watcher_close";
    self.NUMBER = "number";
    self.TIMEEXCEEDED = " - time exceeded";
    self.SEP = " : ";
    this.PortProbeInitialiser = function () {
      return 'self.MESSAGE = "' + self.MESSAGE + '";\n' + 'self.OPEN = "' + self.OPEN + '";\n' + 'self.ERROR = "' + self.ERROR + '";\n' + 'self.CLOSE = "' + self.CLOSE + '";\n' + 'self.INTERVAL = "' + self.INTERVAL + '";\n' + 'self.SOCKET = "' + self.SOCKET + '";\n' + 'self.DATA = "' + self.DATA + '";\n' + 'self.TIMEEXCEEDED = "' + self.TIMEEXCEEDED + '";\n' + 'self.SEP = "' + self.SEP + '";\n';
    };
    this.UnderBossInitialiser = function () {
      return 'self.POSTMSGDONE = "' + self.POSTMSGDONE + '";\n' + 'self.POSTMSGQUERY = "' + self.POSTMSGQUERY + '";\n' + 'self.INIT = "' + self.INIT + '";\n' + 'self.RESULT = "' + self.RESULT + '";\n' + 'self.DATACOUNT = "' + self.DATACOUNT + '";\n' + 'self.CTIMEOUT = "' + self.CTIMEOUT + '";\n' + 'self.MESSAGE = "' + self.MESSAGE + '";\n' + 'self.WOPEN = "' + self.WOPEN + '";\n' + 'self.WERROR = "' + self.WERROR + '";\n' + 'self.WCLOSE = "' + self.WCLOSE + '";\n' + 'self.INTERVAL = "' + self.INTERVAL + '";\n' + 'self.NUMBER = "' + self.NUMBER + '";\n' + 'self.SOCKET = "' + self.SOCKET + '";\n';
    };
    this.replaceGlobalFncNameSpace = function (td_I1) {
      var td_j9 = td_I1;
      var td_S0 = 0;
      while (td_j9.search(self.GLOBREPLACE) !== -1) {
        td_j9 = td_j9.replace(self.GLOBREPLACE, self.REPLACEVAL);
      }
      return td_j9;
    };
    this.debug = function (td_ZC) {
      if (typeof console !== "undefined" && typeof console.log !== "undefined") {
        console.log(td_ZC);
      }
    };
    this.makeDebug = function () {
      var td_bM;
      if (td_1V.hasDebug) {
        td_bM = "\n" + "tmx.debug = " + this.debug.toString() + "\n";
      } else {
        td_bM = "\n" + "tmx.debug = " + function () {}.toString() + "\n";
      }
      return td_bM;
    };
    this.trace = function (td_SY) {
      if (typeof console !== "undefined" && typeof console.log !== "undefined") {
        console.log(td_SY);
      }
    };
    this.makeTrace = function () {
      var td_vM;
      if (td_1V.hasTrace) {
        td_vM = "\n" + "tmx.trace = " + this.trace.toString() + "\n";
      } else {
        td_vM = "\n" + "tmx.trace = " + function () {}.toString() + "\n";
      }
      return td_vM;
    };
  }
  function td_y4(td_lN, td_Di, td_cR) {
    var td_MN = [];
    td_MN[0] = "var tmx = tmx || {}; //namespace" + "\n";
    var td_Gz = new td_Rw;
    td_MN[1] = td_Gz.PortProbeInitialiser() + "\n";
    td_MN[2] = td_lN.substring(td_lN.indexOf("{") + 1, td_lN.lastIndexOf("}"));
    td_MN[3] = td_Gz.makeDebug();
    td_MN[4] = td_Gz.makeTrace();
    td_MN[5] = "\n" + td_g.toString() + "\n";
    var td_Hc = new Blob([td_Gz.replaceGlobalFncNameSpace(td_MN.join(""))], {type: "application/javascript"});
    var td_Kr = new Worker(URL.createObjectURL(td_Hc));
    td_Kr.addEventListener("message", function (td_tU) {
      switch (td_tU.data[0]) {
        case "DATA":
          td_Bp(td_tU);
          break;
        default:
          break;
      }
    }, false);
    td_Kr.postMessage([td_Di, td_cR, td_1V.hasTrace]);
    return td_Kr;
  }
  function td_JY(td_OR, td_TI, td_lK, td_Sd) {
    var td_TU = [];
    td_TU[0] = "var tmx = tmx || {}; //namespace" + "\n";
    var td_Nu = new td_Rw;
    td_TU[1] = td_Nu.UnderBossInitialiser() + "\n";
    td_TU[2] = td_OR.substring(td_OR.indexOf("{") + 1, td_OR.lastIndexOf("}"));
    td_TU[3] = td_Nu.makeDebug();
    td_TU[4] = td_Nu.makeTrace();
    td_TU[5] = "\n" + td_g.toString() + "\n";
    var td_oS = new Blob([td_Nu.replaceGlobalFncNameSpace(td_TU.join(""))], {type: "application/javascript"});
    var td_Zb = new Worker(URL.createObjectURL(td_oS));
    td_Zb.addEventListener("message", function (td_k0) {
      switch (td_k0.data[0]) {
        case "DONE":
          td_Ke(td_k0);
          break;
        case "QUERY":
          var td_Cx = td_sd(td_lK);
          td_Zb.postMessage(["RESULT", td_Cx]);
          break;
        default:
          break;
      }
    }, false);
    td_Zb.postMessage(["INIT", td_TI, td_Sd, td_1V.hasTrace]);
    return td_Zb;
  }
  function td_Bp(td_Um) {
    if (typeof td_Um === "undefined") {
      return;
    }
    if (typeof td_TB === "undefined") {
      return;
    }
    if (!(td_Um.data[1] in td_TB)) {
      td_TB[td_Um.data[1]] = td_Um.data[2];
    }
  }
  function td_Ke(td_lI) {
    if (typeof td_lI === "undefined") {
      return;
    }
    switch (td_lI.data[1]) {
      case "TIMEOUT":
        td_h8(td_Dn);
        td_Tm();
        break;
      case "DATACOUNT":
        if (td_iq === td_sd(td_TB)) {
          td_h8(td_Dn);
          td_Tm();
        } else {
          td_qY();
        }
        break;
      default:
        break;
    }
  }
  function td_fB() {
    self.pstMsg = null;
    self.isDone = false;
    self.PortTestTimeOut = null;
    self.testPort = null;
    self.localStartTime = null;
    self.localWs = null;
    self.logFunc = null;
    self.addEventListener(self.MESSAGE, function (td_ck) {
      self.testPort = td_ck.data[0];
      self.PortTestTimeOut = td_ck.data[1];
      td_qI(td_ck.data[0], td_ck.data[1]);
    });
    var td_CQ = function (td_W1) {
      postMessage([self.OPEN, self.testPort]);
    };
    var td_MR = function (td_Lb) {
      var td_cJ = td_g() - self.localStartTime;
      postMessage([self.ERROR, self.testPort + self.INTERVAL, td_cJ]);
    };
    var td_Gy = function (td_l6) {
      var td_VL = td_g() - self.localStartTime;
      postMessage([self.CLOSE, self.testPort + self.INTERVAL, td_VL]);
    };
    function td_qI() {
      eval_fn_1.debug(self.testPort + self.SEP + self.PortTestTimeOut);
      try {
        self.localWs = new WebSocket(self.SOCKET + self.testPort);
        self.localWs.onopen = td_CQ;
        self.localWs.onerror = td_MR;
        self.localWs.onclose = td_Gy;
        self.localStartTime = td_g();
        setTimeout(td_Ui, 5);
      } catch (td_bX) {
        eval_fn_1.debug(self.ERROR + self.SEP + td_bX.message);
      }
    }
    function td_Ui() {
      var td_uI = td_g() - self.localStartTime;
      if (self.localWs.readyState === 0) {
        if (td_uI > self.PortTestTimeOut) {
          eval_fn_1.debug(self.testPort + self.TIMEEXCEEDED);
          postMessage([self.DATA, self.testPort + self.INTERVAL, self.PortTestTimeOut]);
          td_xa();
        } else {
          setTimeout(function () {
            td_Ui();
          }, 10);
        }
      } else {
        postMessage([self.DATA, self.testPort + self.INTERVAL, td_uI]);
        td_xa();
      }
    }
    function td_xa() {
      self.isDone = true;
      if (self.localWs !== null) {
        self.localWs.close();
        self.localWs = null;
      }
    }
  }
  function td_Ms() {
    self.pstMsg = null;
    self.isDone = false;
    self.count = -1;
    self.time = null;
    self.timeOut = 5e3;
    self.logFunc = null;
    self.addEventListener(self.MESSAGE, function (td_v7) {
      switch (td_v7.data[0]) {
        case self.INIT:
          self.count = td_v7.data[1];
          self.time = td_g();
          if (typeof td_v7.data[2] === self.NUMBER) {
            self.timeOut = td_v7.data[2];
          }
          break;
        case self.RESULT:
          if (td_v7.data[1] < 0 || td_v7.data[1] >= self.count) {
            self.isDone = true;
            postMessage([self.POSTMSGDONE, self.DATACOUNT]);
          } else {
            if (self.time + self.timeOut < td_g()) {
              self.isDone = true;
              postMessage([self.POSTMSGDONE, self.CTIMEOUT]);
            }
          }
          break;
        default:
          break;
      }
      if (self.isDone === false) {
        setTimeout(function () {}, 100);
        postMessage([self.POSTMSGQUERY]);
      }
    });
    var td_yA = function (td_Pj) {
      postMessage([self.WOPEN, td_Pj.toString()]);
    };
    var td_co = function (td_J7) {
      postMessage([self.WERROR, td_J7.toString()]);
    };
    var td_Fm = function (td_o1) {
      postMessage([self.WCLOSE, td_o1.toString()]);
    };
  }
  function td_h8(td_iv) {
    for (var td_hF in td_iv) {
      if (typeof td_iv[td_hF] !== "undefined") {
        td_iv[td_hF].terminate();
      }
    }
  }
  function td_sd(td_nZ) {
    if (typeof td_nZ === "undefined") {
      return -1;
    }
    var td_Sf = 0;
    for (var td_Qm in td_nZ) {
      if (td_nZ.hasOwnProperty(td_Qm)) {
        ++td_Sf;
      }
    }
    return td_Sf;
  }
  function td_Hx(td_lA, td_NB) {
    var td_Xr, td_K2, td_v2;
    for (td_Xr = 0, td_K2 = td_NB.length; td_Xr < td_K2; td_Xr += td_pF) {
      td_v2 = td_NB.slice(td_Xr, td_Xr + td_pF);
      td_hL.push(td_v2);
    }
  }
  function td_qY() {
    var td_dV = td_sd(td_TB) + td_hL[td_sm].length;
    td_d1(td_hL[td_sm++], td_dV);
  }
  function td_d1(td_tJ, td_Ka) {
    for (var td_Eu in td_tJ) {
      td_Dn[td_Eu] = td_y4(td_fB.toString(), td_tJ[td_Eu][0], td_MJ);
    }
    td_JY(td_Ms.toString(), td_Ka, td_TB, td_eH);
  }
  this.scan = function () {
    if (!this.isValid()) {
      return;
    }
    if (typeof this.scanPorts !== "object" || this.scanPorts.length === 0) {
      return;
    }
    var td_vw = typeof Worker !== "undefined" && typeof URL !== "undefined" && td_4O.td_1t !== "Firefox";
    if (td_vw) {
      try {
        var td_o2 = new Blob([""], {type: "application/javascript"});
        var td_Li = new Worker(URL.createObjectURL(td_o2));
        td_Li.terminate();
      } catch (td_Yp) {
        td_vw = false;
      }
    }
    if (td_vw) {
      td_Hx(this, this.scanPorts);
      td_qY(td_sm);
    } else {
      setTimeout(td_f1, this.timeout);
    }
  };
}
td_1V.tdz_d38579805a87470c849c74aa851f3e55 = new td_1V.td_3x("d38579805a87470c849c74aa851f3e5511405d15444d4a5956155942505e5f0a56444c17415d0504575c5f1646115440005a575a424d4845415d5a450a115d065c5c04455d55025c09135b030e");
var td_1V = td_1V || {};
function td_1A() {
  ("use strict");
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (td_IH) {
      var td_I2 = 0;
      var td_hv = 0;
      var td_ZM = 0;
      var td_I3 = new td_3d;
      td_IH.forEach(function (td_HA) {
        if (td_HA.kind === "audioinput") {
          td_I2++;
        } else {
          if (td_HA.kind === "videoinput") {
            td_ZM++;
          } else {
            if (td_HA.kind === "audiooutput") {
              td_hv++;
            }
          }
        }
        var td_At = td_HA.kind + "," + td_HA.label + "," + td_HA.deviceId;
        td_I3.update(td_At + "<br>");
      });
      var td_VQ;
      if (td_I2 !== 0 || td_hv !== 0 || td_ZM !== 0) {
        td_VQ = "(" + td_I2 + "," + td_ZM + "," + td_hv + "," + td_I3.toString() + ")";
      }
      if (td_VQ) {
        var td_Pu = "&medh=" + td_VQ;
        var td_p8 = td_2L + "&jac=1&je=" + td_1V.td_0i(td_Pu, td_0M);
        td_1X(td_p8, document);
      }
    }, function (td_zw) {});
  } catch (td_kf) {}
}
var td_1V = td_1V || {};
if (typeof td_1V.td_1g === "undefined") {
  td_1V.td_1g = [];
}
var td_0L, td_3S, td_4l, td_3G, td_2w, td_3h, td_0M, td_0z, td_0O, td_2r, td_iS = [], td_4y, td_4I, td_3N, td_1a, td_1x, td_4v, td_0y = [], td_4n, td_4K, td_0l, td_0T, td_1i, td_3V, td_0W, td_4e, td_1o, td_1Q, td_3Q, td_2K, td_1L, td_4J, td_0w, td_0Q, td_4h, td_3I, td_2S, td_2m, td_3l = null;
if (typeof navigator !== "undefined") {
  td_iS = navigator.mimeTypes;
}
td_1V.td_1g.push(function () {
  var td_4N = new td_1V.td_3x("239802d5c95c40f3b2aeddfd159b7b315A474D4843084B1A0B175A0D585908564F5F0411160D1E4A5F504D4D51121C425B57665E401C0C410E550E207D6355602B765C262752545301047F52075006730202087E717750735B0A71250D7522752076235A0B16013B58510417440E5F415B50091E435717460A565B3C5D545B01510B590754565507010C01030E5A040257500E010857425B0C575606095450005B015304555C5E5303510B03070A4745424003171F4116564D5C57024D1D13404C510E084B02164B52595C0345511D415C54027B796157662A7D082077065404520327555456532601040824762707770A007D7E09772073217D775C5B42016C0B565C1017080A1458560944440740425B5C57675956590750000D0104025550520B59045D5C515754560E5B0F07155F5D5D5A5D0D5652065A0A070205085E0450565304540C12104146034D1817405D5E43505B00431D4F174045085C575440505C080F0153001E405651145C0956025D540B50565652065A0A070205085E0450565304541707071F511703564C5C5F5E5A575D1D5F014111504D4D5A55121C04424E06080107161F455705080D41566D5A5D05454108591350565312430340115B0E0B3B0D02590306005A5552010251030000510B5C02505C56540D0803150C5D0F0601590252020C0A5056530B0905015D0A510242510A044C064758124712415B4A4B1714071F505B034E4F46421C5056551F54141A1756453C5240485B165F0D5E272D3557627C7D5F742105030503087E000256002109045272712307240A5221225D232077777D20080D41566D5A5D05454108591350565312430340115B0E0B3B0D02590306005A5552010251030000510B5C02505C56540D0803150C5D0F0601590252020C0A5056530B0905015D0A51020C41174946591B1F0E1D0D5C0D0C0A014B0954414B0B4F4C5D54461C5F481F510850024B1B135A57595C10553E0C005913175D59490B5452154257404A515F5C3B5C070407500D080403500102555D5C075D09020A0754550A09571557575E510108070F065A070207025A0A565700560754175C5F5F440B57594647494B0A1D4B46115A1B0656511F1E17414F060B094902411A5A0E5203411F425D5E075F40036A0A5D0816475C0A430B51514317011517585A573D5E060E03010A015A0000575653000D020D0851000751565C5C01400A5E5B5A070A0605020B000B59010A5C02515D07020458124712415B4A4B1714071F505B034E4F46421C5056551F54141A00555002461E165D050650060553535452060E570051060354464A545C420D56530B065A0C5256015151515C5C055F5C06065C01005B0B5456050A01030005045B010251500207031601585D0705045504505A000E560109040A5F5901540105550F075B0D560051066D505251535753060D01500E500350531D56565C5B0A504E54501746591E1D0C5715");
  td_2L = "https://src.ebay-us.com/fp/clear3.png;CIS3SID=CC62701F0025B011FAE4F83DF9EDFBDB?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0";
  td_0k = "t";
  td_1l = "https://h.online-metrix.net/fp/clear.png?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0&if=sid";
  td_0L = "https://src.ebay-us.com/fp/clear.png?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0";
  td_3G = "https://h.online-metrix.net/fp/sid_fp.html;CIS3SID=CC62701F0025B011FAE4F83DF9EDFBDB?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0";
  td_2r = "41ca750c3757352f";
  td_3S = "https://src.ebay-us.com/fp/clear.png";
  td_3b = "https://src.ebay-us.com/fp/top_fp.html;CIS3SID=CC62701F0025B011FAE4F83DF9EDFBDB?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0";
  td_0M = "2398b023c098a9873ec798e";
  td_0y = ["REF:63333", "VNC:5900", "VNC:5901", "VNC:5902", "VNC:5903", "RDP:3389", "ARO:5950", "AMY:5931", "TV0:5939", "TV1:6039", "TV2:5944", "TV2:6040", "APC:5279", "ANY:7070"];
  td_0D = "https://usllpic0qyztypkhg2s2nije7fzqchvkke3og2hfd63932a18872d2a0sac.d.aa.online-metrix.net/fp/clear.png?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0&di=yes";
  td_0z = "usllpic0";
  td_0O = "398cab15ecb942869fa1fe066289ffbd_1757177882920";
  td_3I = "d63932a18872d2a0";
  td_4h = "aa.online-metrix.net";
});
var td_1V = td_1V || {};
td_1V._mean = function (td_k) {
  if (td_k.length < 1) {
    return 0;
  }
  var td_M = 0;
  for (var td_K = 0; td_K < td_k.length; ++td_K) {
    td_M += td_k[td_K];
  }
  return td_M / td_k.length;
};
td_1V.mean = function (td_b) {
  return Math.floor(td_1V._mean(td_b));
};
td_1V.variance = function (td_D, td_O) {
  if (td_D.length < 2) {
    return 0;
  }
  var td_k = 0;
  for (var td_F = 0; td_F < td_D.length; ++td_F) {
    td_k += Math.pow(td_D[td_F] - td_O, 2);
  }
  return td_k / (td_D.length - 1);
};
td_1V._std_dev = function (td_F, td_M) {
  return Math.sqrt(td_1V.variance(td_F, td_M));
};
td_1V.std_dev = function (td_o, td_x) {
  return Math.floor(td_1V._std_dev(td_o, td_x));
};
td_1V.confidence_interval = function (td_N, td_S, td_k, td_f) {
  if (td_N.length < 1) {
    return [];
  }
  var td_w = [];
  var td_z = td_k + td_S * td_f;
  var td_M = td_k - td_S * td_f;
  for (var td_F = 0; td_F < td_N.length; ++td_F) {
    if (td_N[td_F] > td_M && td_z > td_N[td_F]) {
      td_w.push(td_N[td_F]);
    }
  }
  return td_w;
};
td_1V.median = function (td_V) {
  if (typeof td_V.sort === "undefined") {
    return null;
  }
  var td_z = null;
  if (typeof JSON !== "undefined" && typeof JSON.stringify !== "undefined" && typeof JSON.parse !== "undefined") {
    td_z = JSON.parse(JSON.stringify(td_V));
  } else {
    if (typeof td_V.slice !== "undefined") {
      td_z = td_V.slice();
    }
  }
  if (td_z === null) {
    return null;
  }
  td_z.sort(function (td_f, td_O) {
    return td_f - td_O;
  });
  var td_G = td_z.length;
  if (1 > td_G) {
    return 0;
  } else {
    if (2 > td_G) {
      return td_z[0];
    } else {
      if (td_G % 2) {
        return td_z[Math.floor(td_G / 2)];
      } else {
        var td_M = td_z[Math.floor(td_G / 2 - 1)];
        var td_n = td_z[Math.floor(td_G / 2)];
        return (td_M + td_n) / 2;
      }
    }
  }
};
td_1V.mad = function (td_x, td_w) {
  if (typeof td_w === "undefined" || typeof td_x === "undefined" || typeof td_x.length === "undefined") {
    return 0;
  }
  var td_E = td_x.length;
  if (1 > td_E) {
    return 0;
  }
  var td_n = [];
  for (var td_o in td_x) {
    if (td_x.hasOwnProperty(td_o)) {
      td_n.push(Math.abs(td_x[td_o] - td_w));
    }
  }
  return td_1V.median(td_n);
};
td_1V.tdz_357673a2753e45e4a91a946e9c4ef98e = new td_1V.td_3x("357673a2753e45e4a91a946e9c4ef98e03040505030657050f0c520757510052");
var td_3f = function (td_rt) {
  function td_nF(td_nZ) {
    return td_ph(td_uV(td_Yb(td_nZ), td_nZ.length * 8));
  }
  function td_Ka(td_Do) {
    var td_am = "0123456789abcdef";
    var td_ht = "";
    var td_XW;
    for (var td_OI = 0; td_OI < td_Do.length; td_OI++) {
      td_XW = td_Do.charCodeAt(td_OI);
      td_ht += td_am.charAt(td_XW >>> 4 & 15) + td_am.charAt(td_XW & 15);
    }
    return td_ht;
  }
  function td_cL(td_v2) {
    var td_fn = "";
    var td_pU = -1;
    var td_oc, td_ht;
    while (++td_pU < td_v2.length) {
      td_oc = td_v2.charCodeAt(td_pU);
      td_ht = td_pU + 1 < td_v2.length ? td_v2.charCodeAt(td_pU + 1) : 0;
      if (55296 <= td_oc && td_oc <= 56319 && 56320 <= td_ht && td_ht <= 57343) {
        td_oc = 65536 + ((td_oc & 1023) << 10) + (td_ht & 1023);
        td_pU++;
      }
      if (td_oc <= 127) {
        td_fn += String.fromCharCode(td_oc);
      } else {
        if (td_oc <= 2047) {
          td_fn += String.fromCharCode(192 | td_oc >>> 6 & 31, 128 | td_oc & 63);
        } else {
          if (td_oc <= 65535) {
            td_fn += String.fromCharCode(224 | td_oc >>> 12 & 15, 128 | td_oc >>> 6 & 63, 128 | td_oc & 63);
          } else {
            if (td_oc <= 2097151) {
              td_fn += String.fromCharCode(240 | td_oc >>> 18 & 7, 128 | td_oc >>> 12 & 63, 128 | td_oc >>> 6 & 63, 128 | td_oc & 63);
            }
          }
        }
      }
    }
    return td_fn;
  }
  function td_Yb(td_U4) {
    var td_Rw = Array(td_U4.length >> 2);
    for (var td_cd = 0; td_cd < td_Rw.length; td_cd++) {
      td_Rw[td_cd] = 0;
    }
    for (td_cd = 0; td_cd < td_U4.length * 8; td_cd += 8) {
      td_Rw[td_cd >> 5] |= (td_U4.charCodeAt(td_cd / 8) & 255) << td_cd % 32;
    }
    return td_Rw;
  }
  function td_ph(td_c4) {
    var td_AS = "";
    for (var td_l0 = 0; td_l0 < td_c4.length * 32; td_l0 += 8) {
      td_AS += String.fromCharCode(td_c4[td_l0 >> 5] >>> td_l0 % 32 & 255);
    }
    return td_AS;
  }
  function td_uV(td_E8, td_sE) {
    td_E8[td_sE >> 5] |= 128 << td_sE % 32;
    td_E8[(td_sE + 64 >>> 9 << 4) + 14] = td_sE;
    var td_w2 = 1732584193;
    var td_tP = -271733879;
    var td_CN = -1732584194;
    var td_b8 = 271733878;
    for (var td_gu = 0; td_gu < td_E8.length; td_gu += 16) {
      var td_ek = td_w2;
      var td_xu = td_tP;
      var td_cs = td_CN;
      var td_Qf = td_b8;
      td_w2 = td_pG(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 0], 7, -680876936);
      td_b8 = td_pG(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 1], 12, -389564586);
      td_CN = td_pG(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 2], 17, 606105819);
      td_tP = td_pG(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 3], 22, -1044525330);
      td_w2 = td_pG(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 4], 7, -176418897);
      td_b8 = td_pG(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 5], 12, 1200080426);
      td_CN = td_pG(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 6], 17, -1473231341);
      td_tP = td_pG(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 7], 22, -45705983);
      td_w2 = td_pG(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 8], 7, 1770035416);
      td_b8 = td_pG(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 9], 12, -1958414417);
      td_CN = td_pG(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 10], 17, -42063);
      td_tP = td_pG(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 11], 22, -1990404162);
      td_w2 = td_pG(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 12], 7, 1804603682);
      td_b8 = td_pG(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 13], 12, -40341101);
      td_CN = td_pG(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 14], 17, -1502002290);
      td_tP = td_pG(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 15], 22, 1236535329);
      td_w2 = td_qc(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 1], 5, -165796510);
      td_b8 = td_qc(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 6], 9, -1069501632);
      td_CN = td_qc(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 11], 14, 643717713);
      td_tP = td_qc(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 0], 20, -373897302);
      td_w2 = td_qc(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 5], 5, -701558691);
      td_b8 = td_qc(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 10], 9, 38016083);
      td_CN = td_qc(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 15], 14, -660478335);
      td_tP = td_qc(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 4], 20, -405537848);
      td_w2 = td_qc(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 9], 5, 568446438);
      td_b8 = td_qc(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 14], 9, -1019803690);
      td_CN = td_qc(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 3], 14, -187363961);
      td_tP = td_qc(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 8], 20, 1163531501);
      td_w2 = td_qc(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 13], 5, -1444681467);
      td_b8 = td_qc(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 2], 9, -51403784);
      td_CN = td_qc(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 7], 14, 1735328473);
      td_tP = td_qc(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 12], 20, -1926607734);
      td_w2 = td_Kb(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 5], 4, -378558);
      td_b8 = td_Kb(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 8], 11, -2022574463);
      td_CN = td_Kb(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 11], 16, 1839030562);
      td_tP = td_Kb(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 14], 23, -35309556);
      td_w2 = td_Kb(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 1], 4, -1530992060);
      td_b8 = td_Kb(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 4], 11, 1272893353);
      td_CN = td_Kb(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 7], 16, -155497632);
      td_tP = td_Kb(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 10], 23, -1094730640);
      td_w2 = td_Kb(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 13], 4, 681279174);
      td_b8 = td_Kb(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 0], 11, -358537222);
      td_CN = td_Kb(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 3], 16, -722521979);
      td_tP = td_Kb(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 6], 23, 76029189);
      td_w2 = td_Kb(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 9], 4, -640364487);
      td_b8 = td_Kb(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 12], 11, -421815835);
      td_CN = td_Kb(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 15], 16, 530742520);
      td_tP = td_Kb(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 2], 23, -995338651);
      td_w2 = td_Zd(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 0], 6, -198630844);
      td_b8 = td_Zd(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 7], 10, 1126891415);
      td_CN = td_Zd(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 14], 15, -1416354905);
      td_tP = td_Zd(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 5], 21, -57434055);
      td_w2 = td_Zd(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 12], 6, 1700485571);
      td_b8 = td_Zd(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 3], 10, -1894986606);
      td_CN = td_Zd(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 10], 15, -1051523);
      td_tP = td_Zd(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 1], 21, -2054922799);
      td_w2 = td_Zd(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 8], 6, 1873313359);
      td_b8 = td_Zd(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 15], 10, -30611744);
      td_CN = td_Zd(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 6], 15, -1560198380);
      td_tP = td_Zd(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 13], 21, 1309151649);
      td_w2 = td_Zd(td_w2, td_tP, td_CN, td_b8, td_E8[td_gu + 4], 6, -145523070);
      td_b8 = td_Zd(td_b8, td_w2, td_tP, td_CN, td_E8[td_gu + 11], 10, -1120210379);
      td_CN = td_Zd(td_CN, td_b8, td_w2, td_tP, td_E8[td_gu + 2], 15, 718787259);
      td_tP = td_Zd(td_tP, td_CN, td_b8, td_w2, td_E8[td_gu + 9], 21, -343485551);
      td_w2 = td_uJ(td_w2, td_ek);
      td_tP = td_uJ(td_tP, td_xu);
      td_CN = td_uJ(td_CN, td_cs);
      td_b8 = td_uJ(td_b8, td_Qf);
    }
    return Array(td_w2, td_tP, td_CN, td_b8);
  }
  function td_BI(td_XE, td_RM, td_Y4, td_jC, td_uE, td_bo) {
    return td_uJ(td_vI(td_uJ(td_uJ(td_RM, td_XE), td_uJ(td_jC, td_bo)), td_uE), td_Y4);
  }
  function td_pG(td_xj, td_Fy, td_J9, td_jX, td_sl, td_rk, td_xN) {
    return td_BI(td_Fy & td_J9 | ~td_Fy & td_jX, td_xj, td_Fy, td_sl, td_rk, td_xN);
  }
  function td_qc(td_WV, td_Vx, td_gK, td_qq, td_jZ, td_Qf, td_je) {
    return td_BI(td_Vx & td_qq | td_gK & ~td_qq, td_WV, td_Vx, td_jZ, td_Qf, td_je);
  }
  function td_Kb(td_oo, td_jJ, td_Yj, td_Fo, td_lp, td_bk, td_rH) {
    return td_BI(td_jJ ^ td_Yj ^ td_Fo, td_oo, td_jJ, td_lp, td_bk, td_rH);
  }
  function td_Zd(td_kq, td_cO, td_ft, td_Wz, td_oF, td_It, td_tT) {
    return td_BI(td_ft ^ (td_cO | ~td_Wz), td_kq, td_cO, td_oF, td_It, td_tT);
  }
  function td_uJ(td_j4, td_Cy) {
    var td_xB = (td_j4 & 65535) + (td_Cy & 65535);
    var td_FW = (td_j4 >> 16) + (td_Cy >> 16) + (td_xB >> 16);
    return td_FW << 16 | td_xB & 65535;
  }
  function td_vI(td_Wo, td_ql) {
    return td_Wo << td_ql | td_Wo >>> 32 - td_ql;
  }
  return td_Ka(td_nF(td_cL(td_rt)));
};
td_1V.tdz_1c9f2e7af97d44d19e978bc9fe152687 = new td_1V.td_3x("1c9f2e7af97d44d19e978bc9fe15268744105c4641114508054d721c44580b435c17707218060c5c150b1641124157455a367a24400a4012034b622776460b464a004b175b0300510345505651534843110b5c075600451235585105465d37505f044b5e185b4e190504525d5716595452064912120d5200025c4517737130705a065c474c484c134a45");
var td_1V = td_1V || {};
function td_jT() {
  ("use strict");
  var td_Sw = [["Explorer", 0, "IE doesn't work"], ["UCBrowser", 0, "UCBrowser cache accept headers"], ["Safari", 9, "Safari 9- cache accept headers"]];
  try {
    for (var td_BY = 0; td_BY < td_Sw.length; td_BY++) {
      var td_GO = td_Sw[td_BY][0];
      var td_VJ = td_Sw[td_BY][1];
      if (td_4O.td_1t !== td_GO) {
        continue;
      }
      if (td_VJ === 0) {
        return false;
      }
      var td_Wb = parseInt(td_4O.td_4t);
      if (td_Wb && td_VJ < td_Wb) {
        return true;
      }
      return false;
    }
  } catch (td_TQ) {
    return false;
  }
  return true;
}
function td_4Y() {
  ("use strict");
  var td_dL = td_1V.td_4p();
  if (!td_jT() || !td_dL) {
    return false;
  }
  try {
    var td_TH = td_0z + "/" + td_3I + td_0M;
    td_TH = td_TH.replace(/[\r\n]/g, "");
    td_dL.open("GET", td_3S, true);
    td_dL.setRequestHeader("Accept", "*/*, " + td_TH);
    td_dL.send(null);
    return true;
  } catch (td_Y4) {
    return false;
  }
  return false;
}
td_1V.tdz_695f100a38364b65a194b99e3f35fbb1 = new td_1V.td_3x("695f100a38364b65a194b99e3f35fbb1167665341e107f316177435346037945044358142f50570c76025450231a125d594b50147454574e765c546f5520445a16425c463b585701561e60540b11175f517b470946435513667b71445b154550137251460d545c2a5e085a6203002d5c58506203531f76195a7760705d1053530e497a460b766a3d5a075c780f4d2f58435077145e474304417943465807655407504b5d345c4b165a095d5c2503007a727c7e095f41450441574175550f5f5b0e7f5c40115a5815562b607c232b277c595b5c0a54644208575d5d4246147150025a56790d4350095f07645c08350b5f525642157c5153365a56575943111665095e575123575d175c0f577a16070c73657d66135f7f632d5a56464e140344582d5857411a7b5504500d715014101b5866515a08545960095c5656195d325951086158502e5057104b46525414010a665f57510946431050036f5a58500d414641091705355057015c1140155e350b5f52564215110767085d5c5c414742605c124558630b575d0a441513660310145444190756010367085d5c5c4147426e65365857500d4e4a4501560305310b0c55594e46467c7567085d5c5c4147420f0d365857500d4e4a450a53645c08060d4645197b3211041e5164515d525b15451522746e5d0c5d56124046001b57532f5055197a3511687d0050187c65630b58510e464a143251560b5646051b56350b5f525642151160580e5d5d13011a52615c0f5556431119690d5c0856155e4c52665f575109464310315b575d53145a1804365857500d4e4a45630e5c5b03425301180940085a5e5f165d517c65142d66670842195a0d4d1904131052590f06426464756e09535a5502471860575203445c3354545b165c770a470f555c0503165859576815505651135a5a415742070c1a4e734b55145c5c015403091a490b32595957504958605105");
var td_1V = td_1V || {};
var td_4O = {td_2c: function () {
  if (typeof navigator !== "undefined") {
    this.td_Z(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
  }
}, td_Z: function (td_Q, td_p, td_g, td_E, td_i) {
  this.td_y = [{string: td_Q, subString: " OPR/", versionSearch: " OPR", identity: "Opera"}, {string: td_Q, subString: "Opera Mini", versionSearch: "Opera Mini", identity: "Opera Mini"}, {string: td_Q, subString: "Edge", versionSearch: "Edge", identity: "Explorer"}, {string: td_Q, subString: "Edg/", versionSearch: "Edg", identity: "Explorer"}, {string: td_Q, subString: "YaBrowser", versionSearch: "YaBrowser", identity: "Yandex"}, {string: td_Q, subString: "SamsungBrowser", identity: "SamsungBrowser"}, {string: td_Q, subString: "UCBrowser", identity: "UCBrowser"}, {string: td_Q, subString: "Chrome", identity: "Chrome"}, {string: td_Q, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"}, {string: td_Q, subString: "FxiOS", identity: "Firefox", versionSearch: "FxiOS"}, {string: td_Q, subString: "CriOS", identity: "Chrome", versionSearch: "CriOS"}, {string: td_Q, subString: "XiaoMi/MiuiBrowser", identity: "XiaoMi/MiuiBrowser", versionSearch: "XiaoMi/MiuiBrowser"}, {string: td_p, subString: "Apple", identity: "Safari", versionSearch: "Version"}, {prop: td_i, identity: "Opera", versionSearch: "Version"}, {string: td_p, subString: "iCab", identity: "iCab"}, {string: td_p, subString: "KDE", identity: "Konqueror"}, {string: td_Q, subString: "Firefox", identity: "Firefox"}, {string: td_p, subString: "Camino", identity: "Camino"}, {string: td_Q, subString: "Netscape", identity: "Netscape"}, {string: td_Q, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE"}, {string: td_Q, subString: "IEMobile", identity: "IEMobile", versionSearch: "IEMobile"}, {string: td_Q, subString: "Trident", identity: "Explorer", versionSearch: "rv"}, {string: td_Q, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"}, {string: td_Q, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}];
  this.td_v = [{string: td_g, subString: "Win", identity: "Windows"}, {string: td_g, subString: "Mac", identity: "Mac"}, {string: td_Q, subString: "Windows Phone", identity: "Windows Phone"}, {string: td_Q, subString: "Android", identity: "Android"}, {string: td_Q, subString: "OpenBSD", identity: "OpenBSD"}, {string: td_Q, subString: "SunOS", identity: "SunOS"}, {string: td_g, subString: "Linux arm", identity: "Android"}, {string: td_g, subString: "Linux", identity: "Linux"}, {string: td_g, subString: "BlackBerry", identity: "BlackBerry"}, {string: td_g, subString: "iPhone", identity: "iPhone/iPod"}, {string: td_g, subString: "iPad", identity: "iPad"}];
  this.td_m = [{string: td_g, subString: "Win", identity: "Windows"}, {string: td_g, subString: "Mac", identity: "Mac"}, {string: td_g, subString: "Linux arm", identity: "Android"}, {string: td_g, subString: "Linux aarch", identity: "Android"}, {string: td_g, subString: "Linux", identity: "Linux"}, {string: td_g, subString: "BlackBerry", identity: "BlackBerry"}, {string: td_g, subString: "iPhone", identity: "iPhone"}, {string: td_g, subString: "iPad", identity: "iPad"}];
  this.td_R = [{identity: "Windows", versionMap: [{s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/}, {s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/}, {s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/}, {s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/}, {s: "Windows Vista", r: /Windows NT 6.0/}, {s: "Windows Server 2003", r: /Windows NT 5.2/}, {s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/}, {s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/}, {s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/}, {s: "Windows 98", r: /(Windows 98|Win98)/}, {s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/}, {s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/}, {s: "Windows CE", r: /Windows CE/}, {s: "Windows 3.11", r: /Win16/}]}, {identity: "Mac", versionMap: [{s: "Mac OS X", r: /Mac OS X/}, {s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}]}, {identity: "Windows Phone", versionMap: [{s: "Windows Phone 6.0", r: /Windows Phone 6.0/}, {s: "Windows Phone 7.0", r: /Windows Phone 7.0/}, {s: "Windows Phone 8.0", r: /Windows Phone 8.0/}, {s: "Windows Phone 8.1", r: /Windows Phone 8.1/}, {s: "Windows Phone 10.0", r: /Windows Phone 10.0/}]}];
  this.td_3q = typeof window.orientation !== "undefined";
  this.td_3B = this.td_H(this.td_m) || "unknown";
  this.td_4f = this.td_U(this.td_3q, this.td_3B) || "unknown";
  this.td_1t = this.td_H(this.td_y) || "unknown";
  this.td_4t = this.td_j(this.td_1t, td_Q) || this.td_j(this.td_1t, td_E) || "unknown";
  this.td_1Y = this.td_H(this.td_v) || "unknown";
  this.td_2U = this.td_I(this.td_R, this.td_1Y, td_Q, td_E) || this.td_1Y;
  this.td_h();
}, td_I: function (td_Y, td_B, td_a, td_A) {
  var td_S = td_a;
  var td_f = td_A;
  var td_J = td_B;
  var td_l;
  for (var td_N = 0; td_N < td_Y.length; td_N++) {
    if (td_Y[td_N].identity === td_B) {
      for (var td_C = 0; td_C < td_Y[td_N].versionMap.length; td_C++) {
        var td_i = td_Y[td_N].versionMap[td_C];
        if (td_i.r.test(td_S)) {
          td_J = td_i.s;
          if (/Windows/.test(td_J)) {
            return td_J;
          }
          break;
        }
      }
      break;
    }
  }
  switch (td_J) {
    case "Mac OS X":
      td_J = null;
      var td_E = /(Mac OS X 10[\.\_\d]+)/.exec(td_S);
      if (td_E !== null && td_E.length >= 1) {
        td_J = td_E[1];
      }
      break;
    case "Android":
      td_J = null;
      var td_w = /[^-](Android[^\d]?[\.\_\d]+)/.exec(td_S);
      if (td_w !== null && td_w.length >= 1) {
        td_J = td_w[1];
      }
      break;
    case "iPad":
    case "iPhone":
    case "iPhone/iPod":
      td_J = null;
      td_l = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_f);
      if (td_l !== null) {
        var td_u = td_l.length >= 1 ? td_l[1] : "unknown";
        var td_W = td_l.length >= 2 ? td_l[2] : "unknown";
        var td_M = td_l.length >= 3 ? td_l[3] | "0" : "0";
        td_J = "iOS " + td_u + "." + td_W + "." + td_M;
      }
      break;
    default:
      return null;
  }
  return td_J;
}, td_H: function (td_t) {
  for (var td_k = 0; td_k < td_t.length; td_k++) {
    var td_Q = td_t[td_k].string;
    var td_L = td_t[td_k].prop;
    this.versionSearchString = td_t[td_k].versionSearch || td_t[td_k].identity;
    if (td_Q) {
      if (td_Q.indexOf(td_t[td_k].subString) !== -1) {
        return td_t[td_k].identity;
      }
    } else {
      if (td_L) {
        return td_t[td_k].identity;
      }
    }
  }
}, td_j: function (td_O, td_t) {
  if (!td_O) {
    return null;
  }
  var td_o;
  switch (td_O) {
    case "Safari":
      var td_x = /\WVersion[^\d]([\.\d]+)/.exec(td_t);
      if (td_x !== null && td_x.length >= 1) {
        td_o = td_x[1];
      }
      break;
    case "Opera":
      if (this.versionSearchString === "OPR") {
        var td_J = /\WOPR[^\d]*([\.\d]+)/.exec(td_t);
        if (td_J !== null && td_J.length >= 1) {
          td_o = td_J[1];
        }
        break;
      }
    default:
      var td_p = td_t.indexOf(this.versionSearchString);
      if (td_p !== -1) {
        td_o = td_t.substring(td_p + this.versionSearchString.length + 1);
      }
      break;
  }
  if (td_o) {
    return parseFloat(td_o);
  }
  return null;
}, td_X: function (td_i) {
  var td_s = null;
  try {
    td_s = new Worker(td_i);
  } catch (td_M) {
    if (td_s !== null && typeof td_s.terminate !== "undefined") {
      td_s.terminate();
    }
    return td_M.toString().indexOf("is not a valid URL") !== -1;
  }
  return false;
}, td_U: function (isMobile, osNoUA) {
  var psc = this.td_X;
  try {
    var check = typeof window.opr !== "undefined" && typeof td_d.addons !== "undefined" || typeof window.opera !== "undefined";
    if (check) {
      return "Opera";
    }
    check = typeof InstallTrigger !== "undefined";
    if (check) {
      return "Firefox";
    }
    check = /constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    }(!window.safari || typeof safari !== "undefined" && safari.pushNotification);
    check = typeof window.safari !== "undefined";
    if (check) {
      return "Safari";
    }
    check = false || typeof document.documentMode !== "undefined";
    if (check) {
      return "Explorer";
    }
    if (!check && typeof window.StyleMedia !== "undefined") {
      return "Edge";
    }
    if (psc("brave://")) {
      return "Brave";
    }
    if (psc("edge://")) {
      return "Edge";
    }
    check = typeof window.chrome !== "undefined" && typeof window.yandex == "undefined" && (typeof window.chrome.webstore !== "undefined" || typeof window.chrome.runtime !== "undefined" || typeof window.chrome.loadTimes !== "undefined");
    if (check) {
      return "Chrome";
    }
    if (isMobile) {
      check = typeof window.chrome !== "undefined" && typeof window.chrome.Benchmarking !== "undefined";
      if (check) {
        return "SamsungBrowser";
      }
      check = typeof window.ucapi !== "undefined";
      if (check) {
        return "UCBrowser";
      }
    }
    if (osNoUA === "iPhone" || osNoUA === "iPad") {
      if (typeof navigator.serviceWorker !== "undefined") {
        return "Safari";
      }
      if (typeof window.$jscomp !== "undefined") {
        return "Chrome";
      }
    }
    check = typeof window.chrome !== "undefined" && typeof window.yandex !== "undefined";
    if (check) {
      return "Yandex";
    }
  } catch (err) {}
  return null;
}, td_h: function () {
  if (this.td_3q !== true || this.td_3B !== "Mac") {
    return;
  }
  this.td_3B = "iPhone/iPad";
  this.td_1Y = this.td_3B;
  this.td_2U = this.td_1Y;
}, td_y: {}, td_v: {}, td_m: {}, td_R: {}};
td_1V.tdz_19bb0b316e724aedac4a95b3d7f88e58 = new td_1V.td_3x("19bb0b316e724aedac4a95b3d7f88e585857121744425a42160c5944550d0c0041174d115c5a0059015412080957060c040f555a09035152520051695b030f01021714204b47034a3944124a510b52");
td_3d = function () {
  var td_i = "input is invalid type";
  var td_k = typeof window === "object";
  var td_D = td_k ? window : {};
  if (td_D.JS_SHA256_NO_WINDOW) {
    td_k = false;
  }
  var td_o = !td_D.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var td_r = "0123456789abcdef".split("");
  var td_M = [-2147483648, 8388608, 32768, 128];
  var td_V = [24, 16, 8, 0];
  var td_S = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  var td_N = [];
  if (td_D.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (td_n) {
      return Object.prototype.toString.call(td_n) === "[object Array]";
    };
  }
  if (td_o && (td_D.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (td_b) {
      return typeof td_b === "object" && td_b.buffer && td_b.buffer.constructor === ArrayBuffer;
    };
  }
  instance = new td_E(false, false);
  this.update = function (td_w) {
    instance.update(td_w);
  };
  this.hash = function (td_z) {
    instance.update(td_z);
    return instance.toString();
  };
  this.toString = function () {
    return instance.toString();
  };
  function td_E() {
    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.h0 = 1779033703;
    this.h1 = 3144134277;
    this.h2 = 1013904242;
    this.h3 = 2773480762;
    this.h4 = 1359893119;
    this.h5 = 2600822924;
    this.h6 = 528734635;
    this.h7 = 1541459225;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  td_E.prototype.update = function (td_f) {
    if (this.finalized) {
      return;
    }
    var td_x, td_n = typeof td_f;
    if (td_n !== "string") {
      if (td_n === "object") {
        if (td_f === null) {
          throw new Error(td_i);
        } else {
          if (td_o && td_f.constructor === ArrayBuffer) {
            td_f = new Uint8Array(td_f);
          } else {
            if (!Array.isArray(td_f)) {
              if (!td_o || !ArrayBuffer.isView(td_f)) {
                throw new Error(td_i);
              }
            }
          }
        }
      } else {
        throw new Error(td_i);
      }
      td_x = true;
    }
    var td_O, td_w = 0, td_B, td_z = td_f.length, td_F = this.blocks;
    while (td_w < td_z) {
      if (this.hashed) {
        this.hashed = false;
        td_F[0] = this.block;
        td_F[16] = td_F[1] = td_F[2] = td_F[3] = td_F[4] = td_F[5] = td_F[6] = td_F[7] = td_F[8] = td_F[9] = td_F[10] = td_F[11] = td_F[12] = td_F[13] = td_F[14] = td_F[15] = 0;
      }
      if (td_x) {
        for (td_B = this.start; td_w < td_z && td_B < 64; ++td_w) {
          td_F[td_B >> 2] |= td_f[td_w] << td_V[td_B++ & 3];
        }
      } else {
        for (td_B = this.start; td_w < td_z && td_B < 64; ++td_w) {
          td_O = td_f.charCodeAt(td_w);
          if (td_O < 128) {
            td_F[td_B >> 2] |= td_O << td_V[td_B++ & 3];
          } else {
            if (td_O < 2048) {
              td_F[td_B >> 2] |= (192 | td_O >> 6) << td_V[td_B++ & 3];
              td_F[td_B >> 2] |= (128 | td_O & 63) << td_V[td_B++ & 3];
            } else {
              if (td_O < 55296 || td_O >= 57344) {
                td_F[td_B >> 2] |= (224 | td_O >> 12) << td_V[td_B++ & 3];
                td_F[td_B >> 2] |= (128 | td_O >> 6 & 63) << td_V[td_B++ & 3];
                td_F[td_B >> 2] |= (128 | td_O & 63) << td_V[td_B++ & 3];
              } else {
                td_O = 65536 + ((td_O & 1023) << 10 | td_f.charCodeAt(++td_w) & 1023);
                td_F[td_B >> 2] |= (240 | td_O >> 18) << td_V[td_B++ & 3];
                td_F[td_B >> 2] |= (128 | td_O >> 12 & 63) << td_V[td_B++ & 3];
                td_F[td_B >> 2] |= (128 | td_O >> 6 & 63) << td_V[td_B++ & 3];
                td_F[td_B >> 2] |= (128 | td_O & 63) << td_V[td_B++ & 3];
              }
            }
          }
        }
      }
      this.lastByteIndex = td_B;
      this.bytes += td_B - this.start;
      if (td_B >= 64) {
        this.block = td_F[16];
        this.start = td_B - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = td_B;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  td_E.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var td_F = this.blocks, td_B = this.lastByteIndex;
    td_F[16] = this.block;
    td_F[td_B >> 2] |= td_M[td_B & 3];
    this.block = td_F[16];
    if (td_B >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      td_F[0] = this.block;
      td_F[16] = td_F[1] = td_F[2] = td_F[3] = td_F[4] = td_F[5] = td_F[6] = td_F[7] = td_F[8] = td_F[9] = td_F[10] = td_F[11] = td_F[12] = td_F[13] = td_F[14] = td_F[15] = 0;
    }
    td_F[14] = this.hBytes << 3 | this.bytes >>> 29;
    td_F[15] = this.bytes << 3;
    this.hash();
  };
  td_E.prototype.hash = function () {
    var td_Jg = this.h0, td_xg = this.h1, td_qP = this.h2, td_sA = this.h3, td_kM = this.h4, td_O = this.h5, td_F = this.h6, td_K = this.h7, td_tT = this.blocks, td_e, td_B, td_x, td_G, td_b, td_f, td_w, td_nv, td_a6, td_z, td_n;
    for (td_e = 16; td_e < 64; ++td_e) {
      td_b = td_tT[td_e - 15];
      td_B = (td_b >>> 7 | td_b << 25) ^ (td_b >>> 18 | td_b << 14) ^ td_b >>> 3;
      td_b = td_tT[td_e - 2];
      td_x = (td_b >>> 17 | td_b << 15) ^ (td_b >>> 19 | td_b << 13) ^ td_b >>> 10;
      td_tT[td_e] = td_tT[td_e - 16] + td_B + td_tT[td_e - 7] + td_x << 0;
    }
    td_n = td_xg & td_qP;
    for (td_e = 0; td_e < 64; td_e += 4) {
      if (this.first) {
        td_nv = 704751109;
        td_b = td_tT[0] - 210244248;
        td_K = td_b - 1521486534 << 0;
        td_sA = td_b + 143694565 << 0;
        this.first = false;
      } else {
        td_B = (td_Jg >>> 2 | td_Jg << 30) ^ (td_Jg >>> 13 | td_Jg << 19) ^ (td_Jg >>> 22 | td_Jg << 10);
        td_x = (td_kM >>> 6 | td_kM << 26) ^ (td_kM >>> 11 | td_kM << 21) ^ (td_kM >>> 25 | td_kM << 7);
        td_nv = td_Jg & td_xg;
        td_G = td_nv ^ td_Jg & td_qP ^ td_n;
        td_w = td_kM & td_O ^ ~td_kM & td_F;
        td_b = td_K + td_x + td_w + td_S[td_e] + td_tT[td_e];
        td_f = td_B + td_G;
        td_K = td_sA + td_b << 0;
        td_sA = td_b + td_f << 0;
      }
      td_B = (td_sA >>> 2 | td_sA << 30) ^ (td_sA >>> 13 | td_sA << 19) ^ (td_sA >>> 22 | td_sA << 10);
      td_x = (td_K >>> 6 | td_K << 26) ^ (td_K >>> 11 | td_K << 21) ^ (td_K >>> 25 | td_K << 7);
      td_a6 = td_sA & td_Jg;
      td_G = td_a6 ^ td_sA & td_xg ^ td_nv;
      td_w = td_K & td_kM ^ ~td_K & td_O;
      td_b = td_F + td_x + td_w + td_S[td_e + 1] + td_tT[td_e + 1];
      td_f = td_B + td_G;
      td_F = td_qP + td_b << 0;
      td_qP = td_b + td_f << 0;
      td_B = (td_qP >>> 2 | td_qP << 30) ^ (td_qP >>> 13 | td_qP << 19) ^ (td_qP >>> 22 | td_qP << 10);
      td_x = (td_F >>> 6 | td_F << 26) ^ (td_F >>> 11 | td_F << 21) ^ (td_F >>> 25 | td_F << 7);
      td_z = td_qP & td_sA;
      td_G = td_z ^ td_qP & td_Jg ^ td_a6;
      td_w = td_F & td_K ^ ~td_F & td_kM;
      td_b = td_O + td_x + td_w + td_S[td_e + 2] + td_tT[td_e + 2];
      td_f = td_B + td_G;
      td_O = td_xg + td_b << 0;
      td_xg = td_b + td_f << 0;
      td_B = (td_xg >>> 2 | td_xg << 30) ^ (td_xg >>> 13 | td_xg << 19) ^ (td_xg >>> 22 | td_xg << 10);
      td_x = (td_O >>> 6 | td_O << 26) ^ (td_O >>> 11 | td_O << 21) ^ (td_O >>> 25 | td_O << 7);
      td_n = td_xg & td_qP;
      td_G = td_n ^ td_xg & td_sA ^ td_z;
      td_w = td_O & td_F ^ ~td_O & td_K;
      td_b = td_kM + td_x + td_w + td_S[td_e + 3] + td_tT[td_e + 3];
      td_f = td_B + td_G;
      td_kM = td_Jg + td_b << 0;
      td_Jg = td_b + td_f << 0;
    }
    this.h0 = this.h0 + td_Jg << 0;
    this.h1 = this.h1 + td_xg << 0;
    this.h2 = this.h2 + td_qP << 0;
    this.h3 = this.h3 + td_sA << 0;
    this.h4 = this.h4 + td_kM << 0;
    this.h5 = this.h5 + td_O << 0;
    this.h6 = this.h6 + td_F << 0;
    this.h7 = this.h7 + td_K << 0;
  };
  td_E.prototype.hex = function () {
    this.finalize();
    var td_G = this.h0, td_e = this.h1, td_z = this.h2, td_K = this.h3, td_b = this.h4, td_B = this.h5, td_F = this.h6, td_f = this.h7;
    var td_x = td_r[td_G >> 28 & 15] + td_r[td_G >> 24 & 15] + td_r[td_G >> 20 & 15] + td_r[td_G >> 16 & 15] + td_r[td_G >> 12 & 15] + td_r[td_G >> 8 & 15] + td_r[td_G >> 4 & 15] + td_r[td_G & 15] + td_r[td_e >> 28 & 15] + td_r[td_e >> 24 & 15] + td_r[td_e >> 20 & 15] + td_r[td_e >> 16 & 15] + td_r[td_e >> 12 & 15] + td_r[td_e >> 8 & 15] + td_r[td_e >> 4 & 15] + td_r[td_e & 15] + td_r[td_z >> 28 & 15] + td_r[td_z >> 24 & 15] + td_r[td_z >> 20 & 15] + td_r[td_z >> 16 & 15] + td_r[td_z >> 12 & 15] + td_r[td_z >> 8 & 15] + td_r[td_z >> 4 & 15] + td_r[td_z & 15] + td_r[td_K >> 28 & 15] + td_r[td_K >> 24 & 15] + td_r[td_K >> 20 & 15] + td_r[td_K >> 16 & 15] + td_r[td_K >> 12 & 15] + td_r[td_K >> 8 & 15] + td_r[td_K >> 4 & 15] + td_r[td_K & 15] + td_r[td_b >> 28 & 15] + td_r[td_b >> 24 & 15] + td_r[td_b >> 20 & 15] + td_r[td_b >> 16 & 15] + td_r[td_b >> 12 & 15] + td_r[td_b >> 8 & 15] + td_r[td_b >> 4 & 15] + td_r[td_b & 15] + td_r[td_B >> 28 & 15] + td_r[td_B >> 24 & 15] + td_r[td_B >> 20 & 15] + td_r[td_B >> 16 & 15] + td_r[td_B >> 12 & 15] + td_r[td_B >> 8 & 15] + td_r[td_B >> 4 & 15] + td_r[td_B & 15] + td_r[td_F >> 28 & 15] + td_r[td_F >> 24 & 15] + td_r[td_F >> 20 & 15] + td_r[td_F >> 16 & 15] + td_r[td_F >> 12 & 15] + td_r[td_F >> 8 & 15] + td_r[td_F >> 4 & 15] + td_r[td_F & 15];
    td_x += td_r[td_f >> 28 & 15] + td_r[td_f >> 24 & 15] + td_r[td_f >> 20 & 15] + td_r[td_f >> 16 & 15] + td_r[td_f >> 12 & 15] + td_r[td_f >> 8 & 15] + td_r[td_f >> 4 & 15] + td_r[td_f & 15];
    return td_x;
  };
  td_E.prototype.toString = td_E.prototype.hex;
};
td_1V.tdz_393f488e52ea43dd852cd6948c11a66f = new td_1V.td_3x("393f488e52ea43dd852cd6948c11a66f554c5d054051570b405c0e0f5b440a075758420f01425c5b560f5e5005");
function td_A(td_M, td_b, td_q) {
  if (typeof td_q === "undefined" || td_q === null) {
    td_q = 0;
  } else {
    if (td_q < 0) {
      td_q = Math.max(0, td_M.length + td_q);
    }
  }
  for (var td_z = td_q, td_F = td_M.length; td_z < td_F; td_z++) {
    if (td_M[td_z] === td_b) {
      return td_z;
    }
  }
  return -1;
}
function td_l(td_i, td_x, td_G) {
  return td_i.indexOf(td_x, td_G);
}
function td_s(td_n) {
  return td_n.replace(/^\s+|\s+$/g, "");
}
function td_a(td_k) {
  return td_k.trim();
}
function td_3H(td_E) {
  return td_E.trim();
}
function td_0g(td_V, td_q, td_T) {
  return td_V.indexOf(td_q, td_T);
}
function td_g() {
  return Date.now();
}
function td_C() {
  return (new Date).getTime();
}
function td_1k(td_u) {
  return parseFloat(td_u);
}
function td_4z(td_D) {
  return parseInt(td_D);
}
function td_4B(td_G) {
  return isNaN(td_G);
}
function td_2Q(td_q) {
  return isFinite(td_q);
}
function td_L() {
  if (typeof Number.parseFloat !== "undefined" && typeof Number.parseInt !== "undefined") {
    td_1k = Number.parseFloat;
    td_4z = Number.parseInt;
  } else {
    if (typeof parseFloat !== "undefined" && typeof parseInt !== "undefined") {
      td_1k = parseFloat;
      td_4z = parseInt;
    } else {
      td_1k = null;
      td_4z = null;
    }
  }
  if (typeof Number.isNaN !== "undefined") {
    td_4B = Number.isNaN;
  } else {
    if (typeof isNaN !== "undefined") {
      td_4B = isNaN;
    } else {
      td_4B = null;
    }
  }
  if (typeof Number.isFinite !== "undefined") {
    td_2Q = Number.isFinite;
  } else {
    if (typeof isFinite !== "undefined") {
      td_2Q = isFinite;
    } else {
      td_2Q = null;
    }
  }
}
function td_Q() {
  if (!Array.prototype.indexOf) {
    td_0g = td_A;
  } else {
    td_0g = td_l;
  }
  if (typeof String.prototype.trim !== "function") {
    td_3H = td_s;
  } else {
    td_3H = td_a;
  }
  if (typeof Date.now === "undefined") {
    td_g = td_C;
  }
  td_L();
}
function td_4m(td_o) {
  if (typeof document.readyState !== "undefined" && typeof document.readyState !== "unknown" && document.readyState === "complete") {
    td_o();
  } else {
    if (typeof document.readyState === "undefined") {
      setTimeout(td_o, 300);
    } else {
      var td_x = 200;
      var td_n;
      if (typeof window !== "undefined" && typeof window !== "unknown" && window !== null) {
        td_n = window;
      } else {
        td_n = document.body;
      }
      if (td_n.addEventListener) {
        td_n.addEventListener("load", function () {
          setTimeout(td_o, td_x);
        }, false);
      } else {
        if (td_n.attachEvent) {
          td_n.attachEvent("onload", function () {
            setTimeout(td_o, td_x);
          }, false);
        } else {
          var td_f = td_n.onload;
          td_n.onload = new function () {
            var td_P = true;
            if (td_f !== null && typeof td_f === "function") {
              td_P = td_f();
            }
            setTimeout(td_o, td_x);
            td_n.onload = td_f;
            return td_P;
          };
        }
      }
    }
  }
}
function td_J() {
  if (typeof td_0S !== "undefined") {
    td_0S();
  }
  if (typeof td_1G !== "undefined") {
    td_1G();
  }
  if (typeof td_3P !== "undefined") {
    td_3P();
  }
  if (typeof td_1r !== "undefined") {
    td_1r(td_3O);
  }
  if (typeof tmx_link_scan !== "undefined") {
    tmx_link_scan();
  }
  if (typeof td_3K !== "undefined") {
    td_3K();
  }
  if (typeof td_1j !== "undefined") {
    td_1j.start();
  }
  if (typeof td_1p !== "undefined") {
    td_1p.start();
  }
}
function td_0s() {
  td_1V.td_2o();
  td_1V.td_2l(document);
  td_4O.td_2c();
  td_Q();
  td_4m(td_J);
}
td_1V.tdz_7fba7f79359449b0a3a5bd0796d23fe4 = new td_1V.td_3x("7fba7f79359449b0a3a5bd0796d23fe4421507414412455050411f56554d11445c5d145800014215555312575f445f16441203154215150311565155465e0b5e061143400c145c425e51015611");
var td_1V = td_1V || {};
function td_3m() {
  ("use strict");
  var td_I6;
  var td_ue = true;
  this.tryAgain = function () {
    return td_I6 ? false : td_ue;
  };
  this.getFPParams = function () {
    if (td_I6) {
      return "&batst=" + td_I6;
    }
    return null;
  };
  function td_LL(td_Tw, td_e9) {
    var td_bb = "";
    if (typeof td_Tw === "number") {
      td_bb = '"level":' + td_Tw.toFixed(2);
    }
    if (typeof td_e9 !== "undefined") {
      if (td_bb) {
        td_bb += ",";
      }
      td_bb += '"status":' + (td_e9 ? '"charging"' : '"unplugged"');
    }
    if (td_bb) {
      return "{" + td_bb + "}";
    }
    return null;
  }
  this.setup = function () {
    try {
      var td_kR = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery || null;
      if (td_kR) {
        td_I6 = td_LL(td_kR.level, td_kR.charging);
      } else {
        if (navigator.getBattery) {
          navigator.getBattery().then(function (td_OT) {
            td_I6 = td_LL(td_OT.level, td_OT.charging);
          }, function (td_E1) {});
        } else {
          td_ue = false;
        }
      }
    } catch (td_NT) {
      td_ue = false;
    }
  };
}
td_1V.tdz_4288ab7e0998405a8fb66ecc18459ba6 = new td_1V.td_3x("4288ab7e0998405a8fb66ecc18459ba604030a0b555701520800585a575450075d082b7064242e26585e46545407045b44464159130b564854504a59565c500559140b571b0d0a07555d5a18081100585050574012164e09555a56545b420f135f04031e0649534f0114041c0242075a5b534c020d0751110b194957475941085708585754160c0f444c510e19160e460e1f0a0851591709555f4d021902055103460059440106110b08444d4a1002585b5c5b5d2c316f287c0b1760797c7d356c364c0518552e1049555807173a2c7a7c666c682c0b54175f4a565e401e6d2c742e366266");
var td_1V = td_1V || {};
if (typeof td_1V.td_1g === "undefined") {
  td_1V.td_1g = [];
}
td_1V.td_2o = function () {
  for (var td_n = 0; td_n < td_1V.td_1g.length; ++td_n) {
    td_1V.td_1g[td_n]();
  }
};
td_1V.td_0i = function (td_e, td_M) {
  var td_r = td_e.length + "&" + td_e;
  var td_E = "";
  var td_b = "0123456789abcdef";
  for (var td_K = 0, td_S = 0; td_K < td_r.length; td_K++) {
    var td_G = td_r.charCodeAt(td_K) ^ td_M.charCodeAt(td_S) & 10;
    if (++td_S === td_M.length) {
      td_S = 0;
    }
    td_E += td_b.charAt(td_G >> 4 & 15);
    td_E += td_b.charAt(td_G & 15);
  }
  return td_E;
};
td_1V.td_2v = function () {
  try {
    var td_x = window.top.document;
    var td_f = td_x.forms.length;
    return td_x;
  } catch (td_E) {
    return document;
  }
};
td_1V.td_0j = function (td_o) {
  try {
    var td_r;
    if (typeof td_o === "undefined") {
      td_r = window;
    } else {
      if (td_o === "t") {
        td_r = window.top;
      } else {
        if (td_o === "p") {
          td_r = window.parent;
        } else {
          td_r = window;
        }
      }
    }
    var td_O = td_r.document.forms.length;
    return td_r;
  } catch (td_Y) {
    return window;
  }
};
td_1V.add_lang_attr_html_tag = function (td_e) {
  try {
    if (td_e === null) {
      return;
    }
    var td_N = td_e.getElementsByTagName("html");
    if (typeof td_N !== "undefined" && td_N !== null && typeof td_N.length !== "undefined" && td_N.length !== null && td_N.length > 0 && typeof td_N[0] !== "undefined" && typeof td_N[0] !== null && typeof td_N[0].setAttribute !== "undefined" && td_N[0].setAttribute !== null && typeof td_N[0].getAttribute !== "undefined" && td_N[0].getAttribute !== null && (td_N[0].getAttribute("lang") === null || td_N[0].getAttribute("lang") === "")) {
      td_N[0].setAttribute("lang", "en");
    } else {}
  } catch (td_F) {}
};
td_1V.load_iframe = function (td_T, td_i, td_K) {
  var td_t = td_1W(5);
  if (typeof td_4x !== "undefined") {
    td_4x(td_t, "IFRAME");
  }
  var td_z = td_K.createElement("iframe");
  td_z.id = td_t;
  td_z.title = "empty";
  td_z.setAttribute("aria-disabled", "true");
  td_z.setAttribute("aria-hidden", "true");
  td_z.width = "0";
  td_z.height = "0";
  if (typeof td_z.tabIndex !== "undefined") {
    td_z.tabIndex = "-1";
  }
  if (td_3l !== null) {
    td_z.setAttribute("sandbox", td_i);
  }
  td_z.setAttribute("style", "color:rgba(0,0,0,0); float:left; position:absolute; top:-200; left:-200; border:0px");
  td_z.setAttribute("src", td_T);
  td_K.body.appendChild(td_z);
};
td_1V.csp_nonce = null;
td_1V.td_2l = function (td_M) {
  if (typeof td_M.currentScript !== "undefined" && td_M.currentScript !== null) {
    var td_f = td_M.currentScript.getAttribute("nonce");
    if (typeof td_f !== "undefined" && td_f !== null && td_f !== "") {
      td_1V.csp_nonce = td_f;
    } else {
      if (typeof td_M.currentScript.nonce !== "undefined" && td_M.currentScript.nonce !== null && td_M.currentScript.nonce !== "") {
        td_1V.csp_nonce = td_M.currentScript.nonce;
      }
    }
  }
};
td_1V.td_2H = function (td_r) {
  if (td_1V.csp_nonce !== null) {
    td_r.setAttribute("nonce", td_1V.csp_nonce);
    if (td_r.getAttribute("nonce") !== td_1V.csp_nonce) {
      td_r.nonce = td_1V.csp_nonce;
    }
  }
};
td_1V.td_4W = function () {
  try {
    return new ActiveXObject(activeXMode);
  } catch (td_M) {
    return null;
  }
};
td_1V.td_4p = function () {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest;
  }
  if (window.ActiveXObject) {
    var td_p = ["MSXML2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (var td_B = 0; td_B < td_p.length; td_B++) {
      var td_o = td_1V.td_4W(td_p[td_B]);
      if (td_o !== null) {
        return td_o;
      }
    }
  }
  return null;
};
td_1V.tdz_93ea2d8c49e94e2b9422e49aef7fc10e = new td_1V.td_3x("93ea2d8c49e94e2b9422e49aef7fc10e1f44000340105b3c5d57115c460b530e665d420f43435c0317125439064944004b5d040d6d0d485e124e005b4611513d5044440458124e08085b400301434406665a0b15571656025866085d5a161415575d560f12515b13110568080c6e590b4d56170f53086707554d045a550b560b5d5546575f1c6251485f6a1a38001d5c6468554c0b3944526f094800691e001f450669024800643a554b0e3b1f03053e091e503c1b3a104d1d4256444010400c030b4640045a4a110a14435b175240105d43060e5f145406405c");
function td_2Y() {
  var td_Vy = 1;
  var td_ef = td_Vy + ":" + td_0z + ":" + td_0M + ";" + td_3I;
  var td_sv = td_0M;
  var td_D2 = {};
  var td_Pj = {};
  var td_vi = {};
  var td_EU = false;
  var td_K2 = false;
  var td_OH = null;
  var td_HN = false;
  var td_rW = td_g();
  var td_DQ = false;
  this.tryAgain = function () {
    return !td_HN;
  };
  function td_Ka() {
    var td_OL = "";
    var td_FM = Object.keys(td_D2);
    var td_dQ = Object.keys(td_Pj);
    var td_Rq = Object.keys(td_vi);
    if (td_FM.length > 0) {
      td_OL += "&webrtc_internal_ip=" + td_FM.join(",");
    } else {}
    if (td_dQ.length > 0) {
      td_OL += "&webrtc_external_ip=" + td_dQ.join(",");
    }
    if (td_Rq.length > 0) {
      td_OL += "&webrtc_ipv6=" + td_Rq.join(",");
    }
    if (td_EU) {
      td_OL += "&wim=webrtc_internal_mdns";
    }
    if (!td_K2) {
      td_OL += "&wnid=webrtc_no_internal_data";
    }
    return td_OL;
  }
  this.getFPParams = function () {
    if (!td_HN) {
      if ((new Date).getTime() - td_rW > 2e3 || td_DQ) {
        td_HN = true;
        td_OH.close();
        td_OH = null;
        return td_Ka();
      }
    }
    return null;
  };
  this.setup = function () {
    if (!Object || !Object.create || !Object.keys) {
      td_HN = true;
      return;
    }
    var td_uj = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (!td_uj) {
      td_HN = true;
      return;
    }
    this.startWaitTime = td_g();
    function td_CD(td_Cp) {
      var td_M0 = td_Cp.substr(td_Cp.indexOf("candidate:") + 10).split(" ");
      if (td_M0 !== null && td_M0.length > 7 && td_M0[4] !== null) {
        var td_CK = td_M0[4];
        var td_Xm = "([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])";
        var td_AO = "^(" + td_Xm + ".){3}" + td_Xm + "$";
        var td_Z1 = td_M0[7];
        if (td_Z1 === "host") {
          td_K2 = true;
          if (td_CK.match(/^.*\.local$/)) {
            td_EU = true;
            return;
          }
          if (td_CK.match(td_AO)) {
            td_D2[td_CK] = true;
          } else {
            td_vi[td_CK] = true;
          }
        } else {
          if (td_CK.match(td_AO)) {
            td_Pj[td_CK] = true;
          } else {
            td_vi[td_CK] = true;
          }
        }
      }
    }
    try {
      var td_Br = {optional: [{RtpDataChannels: true}]};
      var td_CT = "turn:" + td_4h + "?transport=";
      var td_Ai = {iceServers: [{urls: td_CT + "tcp", username: td_ef, credential: td_sv}, {urls: td_CT + "udp", username: td_ef, credential: td_sv}]};
      td_OH = new td_uj(td_Ai, td_Br);
      td_OH.onicecandidate = function (td_kW) {
        if (td_kW.candidate) {
          td_CD(td_kW.candidate.candidate);
        } else {
          td_DQ = true;
        }
      };
      td_OH.onicegatheringstatechange = function () {
        if (td_OH !== null) {
          if (td_OH.iceGatheringState === "complete") {
            td_DQ = true;
          }
        }
      };
      td_OH.createDataChannel(Math.random().toString());
      var td_bi = function () {};
      var td_js = function (td_Uz) {
        td_OH.setLocalDescription(td_Uz, function () {}, td_bi);
      };
      var td_WY = function () {};
      if (typeof Promise === "undefined" || td_OH.createOffer.length > 0) {
        td_OH.createOffer(td_js, td_WY);
      } else {
        td_OH.createOffer().then(td_js, td_WY);
      }
    } catch (td_Vc) {
      return;
    }
  };
}
td_1V.tdz_288b2b357e6c4fd38267e11798b92abe = new td_1V.td_3x("288b2b357e6c4fd38267e11798b92abe474b5d424116415c541157105d080c524c53585f0049415a08540d5e031116045c485715622b1a0f");
var td_1V = td_1V || {};
function td_1P() {
  ("use strict");
  var td_GQ = [["asinh", 1, function (td_pN) {
    return Math.log(td_pN + Math.sqrt(td_pN * td_pN + 1));
  }], ["atanh", .5, function (td_os) {
    return Math.log((1 + td_os) / (1 - td_os)) / 2;
  }], ["expm1", 1, function (td_ac) {
    return Math.exp(td_ac) - 1;
  }], ["log1p", 10, function (td_uO) {
    return Math.log(1 + td_uO);
  }], ["sinh", 1, function (td_Aq) {
    var td_cH = Math.exp(td_Aq);
    return (td_cH - 1 / td_cH) / 2;
  }], ["cosh", 10, function (td_IZ) {
    var td_tv = Math.exp(td_IZ);
    return (td_tv + 1 / td_tv) / 2;
  }], ["tanh", 1, function (td_n1) {
    var td_lH = Math.exp(2 * td_n1);
    return (td_lH - 1) / (td_lH + 1);
  }], ["tan", -1e300, function (td_kM) {
    return Math.tan(-1e300);
  }], ["powPI", -100, function (td_Z0) {
    return Math.pow(Math.PI, td_Z0);
  }]];
  try {
    var td_Zr = "";
    for (var td_aZ = 0; td_aZ < td_GQ.length; td_aZ++) {
      var td_ie = td_GQ[td_aZ][0] + "(" + td_GQ[td_aZ][1] + "):" + td_GQ[td_aZ][2](td_GQ[td_aZ][1]);
      td_Zr += td_ie + ",";
    }
    var td_xG = new td_3d;
    return td_xG.hash(td_Zr);
  } catch (td_Wr) {}
  return null;
}
td_1V.tdz_139501aa1e4049efa4d5d1656723e63f = new td_1V.td_3x("139501aa1e4049efa4d5d1656723e63f5252574351421604530258554c4900140859015b10505a1841525054095b5c1c1c445c57575d1604530e5d44190a0100145a07410d5e58");
var td_1V = td_1V || {};
function td_nF() {
  if (!!window.WebGLRenderingContext) {
    var td_te = document.createElement("canvas");
    var td_lu = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
    for (var td_b7 = 0; td_b7 < 4; td_b7++) {
      try {
        var td_m6 = td_te.getContext(td_lu[td_b7]);
        if (td_m6 && typeof td_m6.getParameter === "function") {
          return {name: td_lu[td_b7], gl: td_m6};
        }
      } catch (td_zJ) {}
    }
    return -1;
  }
  return 0;
}
td_1V.tdz_95085507365a4ad1b2e276ea11b7d6e5 = new td_1V.td_3x("95085507365a4ad1b2e276ea11b7d6e55c51070b5307005257545353565657170e533a5d5b5258475b575f5b1754581353570d5446540d");
var td_1V = td_1V || {};
if (typeof td_1V.td_1g === "undefined") {
  td_1V.td_1g = [];
}
function td_4S(td_FC) {
  try {
    if (window.localStorage) {
      var td_y8 = null;
      var td_o2 = null;
      var td_Ja = window.localStorage.getItem("ed73f20edbf2b73");
      if (td_Ja !== null) {
        var td_RN = td_Ja.split("_");
        if (td_RN.length === 2) {
          var td_JR = td_RN[1];
          if (td_JR < td_g()) {
            window.localStorage.setItem("ed73f20edbf2b73", td_0O);
            td_y8 = td_0O.split("_")[0];
            td_o2 = td_RN[0];
          } else {
            td_y8 = td_RN[0];
          }
        } else {
          if (td_RN.length === 1) {
            window.localStorage.setItem("ed73f20edbf2b73", td_RN[0] + "_" + td_0O.split("_")[1]);
            td_y8 = td_RN[0];
          } else {
            window.localStorage.setItem("ed73f20edbf2b73", td_0O);
            td_y8 = td_0O.split("_")[0];
          }
        }
      } else {
        window.localStorage.setItem("ed73f20edbf2b73", td_0O);
        td_y8 = td_0O.split("_")[0];
      }
      var td_zl = "";
      if (td_o2 !== null) {
        td_zl = "&la_old=" + td_o2;
      }
      var td_Us = td_0L + td_zl;
      if (typeof td_FC !== "undefined" && td_FC === true) {
        td_Us += "&jf=" + td_1V.td_0i("lsb=" + td_y8, td_0M);
      } else {
        td_FC = false;
        td_Us += "&jb=" + td_1V.td_0i("lsa=" + td_2r + td_y8, td_0M);
      }
      td_1X(td_Us, document);
      if (typeof td_4A !== "undefined") {
        td_4A(td_FC);
      }
      return td_Us;
    }
  } catch (td_vA) {}
}
function td_2N() {
  td_1V.td_2o();
  td_1V.td_2l(document);
  td_Q();
  td_4S(true);
}
td_1V.td_1g.push(function () {
  var td_2h = new td_1V.td_3x("dc7352d23d114042abf68a646e87421e0C17434346084B1D4016521F5152554B4C1715185B0E5B1B50151754585750174A1359540A5D16556C0D550C4143585E110B05061E125347450C57596B5B555856500E0B570256015054080955090C055207050101595312580A5654510F5553575A040154035C0A0456550355000003020351030802050303520B020654035154560F04035354070451050506000C54520100055D59075053515A0651026E545356000202055C0A015D030006030D0A035254055B510F0C575C0000075752525D5B52");
  td_0M = "2398b023c098a9873ec798e";
  td_0O = "2405876a057544208f3cf3e81de4b1e0_1757177882921";
  td_2r = "41ca750c3757352f";
  td_0L = "https://src.ebay-us.com/fp/clear.png?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0";
});
var td_1V = td_1V || {};
td_1V.td_2C = function () {};
td_1V.hasDebug = false;
td_1V.trace = function () {};
td_1V.hasTrace = false;
td_1V.tdz_d2f4ac7f217246c795f837f2e65fc1f2 = new td_1V.td_3x("d2f4ac7f217246c795f837f2e65fc1f2114103141217450f5145115341520b0a4d470f595d500a57");
var td_1V = td_1V || {};
function td_0n() {
  ("use strict");
  var td_sM;
  var td_Vz = true;
  this.tryAgain = function () {
    return td_sM ? false : td_Vz;
  };
  this.getFPParams = function () {
    if (td_sM) {
      return "&audh=" + td_sM;
    }
    return null;
  };
  this.setup = function () {
    try {
      var td_uV;
      if (td_uV = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100), !td_uV) {
        return null;
      }
      var td_Ke = td_uV.createOscillator();
      td_Ke.type = "triangle";
      td_Ke.frequency.value = 1e4;
      var td_ZD = td_uV.createDynamicsCompressor();
      td_ZD.threshold && (td_ZD.threshold.value = -50);
      td_ZD.knee && (td_ZD.knee.value = 40);
      td_ZD.ratio && (td_ZD.ratio.value = 12);
      td_ZD.reduction && (td_ZD.reduction.value = -20);
      td_ZD.attack && (td_ZD.attack.value = 0);
      td_ZD.release && (td_ZD.release.value = .25);
      td_Ke.connect(td_ZD);
      td_ZD.connect(td_uV.destination);
      td_Ke.start(0);
      td_uV.startRendering();
      td_uV.oncomplete = function (td_dj) {
        if (typeof td_dj.renderedBuffer === "undefined") {
          return;
        }
        var td_To = new td_3d;
        for (var td_Us = 0; td_Us < td_dj.renderedBuffer.length; td_Us++) {
          td_To.update(td_dj.renderedBuffer.getChannelData(0)[td_Us].toString());
        }
        td_ZD.disconnect();
        td_sM = td_To.toString();
      };
    } catch (td_go) {
      td_Vz = false;
    }
  };
}
var td_1J = {};
td_1J.td_3U = function (td_G, td_V) {
  td_V = typeof td_V === "undefined" ? true : td_V;
  if (td_V) {
    td_G = td_2W.td_2G(td_G);
  }
  var td_z = [1518500249, 1859775393, 2400959708, 3395469782];
  td_G += String.fromCharCode(128);
  var td_L = td_G.length / 4 + 2;
  var td_s = Math.ceil(td_L / 16);
  var td_B = new Array(td_s);
  for (var td_K = 0; td_K < td_s; td_K++) {
    td_B[td_K] = new Array(16);
    for (var td_g = 0; td_g < 16; td_g++) {
      td_B[td_K][td_g] = td_G.charCodeAt(td_K * 64 + td_g * 4) << 24 | td_G.charCodeAt(td_K * 64 + td_g * 4 + 1) << 16 | td_G.charCodeAt(td_K * 64 + td_g * 4 + 2) << 8 | td_G.charCodeAt(td_K * 64 + td_g * 4 + 3);
    }
  }
  td_B[td_s - 1][14] = (td_G.length - 1) * 8 / 4294967296;
  td_B[td_s - 1][14] = Math.floor(td_B[td_s - 1][14]);
  td_B[td_s - 1][15] = (td_G.length - 1) * 8 & 4294967295;
  var td_n = 1732584193;
  var td_Y = 4023233417;
  var td_T = 2562383102;
  var td_S = 271733878;
  var td_O = 3285377520;
  var td_a = new Array(80);
  var td_r, td_k, td_W, td_P, td_t;
  for (var td_K = 0; td_K < td_s; td_K++) {
    for (var td_u = 0; td_u < 16; td_u++) {
      td_a[td_u] = td_B[td_K][td_u];
    }
    for (var td_u = 16; td_u < 80; td_u++) {
      td_a[td_u] = td_1J.td_0Y(td_a[td_u - 3] ^ td_a[td_u - 8] ^ td_a[td_u - 14] ^ td_a[td_u - 16], 1);
    }
    td_r = td_n;
    td_k = td_Y;
    td_W = td_T;
    td_P = td_S;
    td_t = td_O;
    for (var td_u = 0; td_u < 80; td_u++) {
      var td_M = Math.floor(td_u / 20);
      var td_x = td_1J.td_0Y(td_r, 5) + td_1J.f(td_M, td_k, td_W, td_P) + td_t + td_z[td_M] + td_a[td_u] & 4294967295;
      td_t = td_P;
      td_P = td_W;
      td_W = td_1J.td_0Y(td_k, 30);
      td_k = td_r;
      td_r = td_x;
    }
    td_n = td_n + td_r & 4294967295;
    td_Y = td_Y + td_k & 4294967295;
    td_T = td_T + td_W & 4294967295;
    td_S = td_S + td_P & 4294967295;
    td_O = td_O + td_t & 4294967295;
  }
  return td_1J.td_2g(td_n) + td_1J.td_2g(td_Y) + td_1J.td_2g(td_T) + td_1J.td_2g(td_S) + td_1J.td_2g(td_O);
};
td_1J.f = function (td_k, td_M, td_z, td_b) {
  switch (td_k) {
    case 0:
      return td_M & td_z ^ ~td_M & td_b;
    case 1:
      return td_M ^ td_z ^ td_b;
    case 2:
      return td_M & td_z ^ td_M & td_b ^ td_z & td_b;
    case 3:
      return td_M ^ td_z ^ td_b;
  }
};
td_1J.td_0Y = function (td_L, td_K) {
  return td_L << td_K | td_L >>> 32 - td_K;
};
td_1J.td_2g = function (td_D) {
  var td_p = "", td_C;
  for (var td_k = 7; td_k >= 0; td_k--) {
    td_C = td_D >>> td_k * 4 & 15;
    td_p += td_C.toString(16);
  }
  return td_p;
};
var td_2W = {};
td_2W.td_2G = function (td_n) {
  var td_l = td_n.replace(/[\u0080-\u07ff]/g, function (td_e) {
    var td_E = td_e.charCodeAt(0);
    return String.fromCharCode(192 | td_E >> 6, 128 | td_E & 63);
  });
  td_l = td_l.replace(/[\u0800-\uffff]/g, function (td_q) {
    var td_F = td_q.charCodeAt(0);
    return String.fromCharCode(224 | td_F >> 12, 128 | td_F >> 6 & 63, 128 | td_F & 63);
  });
  return td_l;
};
function td_1q(td_T) {
  return td_1J.td_3U(td_T, true);
}
td_1V.tdz_9ab68854606b47e8b03b6632471f1af6 = new td_1V.td_3x("9ab68854606b47e8b03b6632471f1af64e080c52574f46435f5e5f125c580b5d4d59430d525f5c4159565209530b03554d0d0b584d40545a5242590b50521d480e5f4107445f56");
function td_D4(td_4y) {
  var td_Vj = td_4y.toLowerCase();
  if (td_Vj === "windows") {
    td_Vj = "win";
  } else {
    if (td_Vj === "iphone/ipod" || td_Vj === "ipad") {
      td_Vj = "ios";
    }
  }
  this.os_name = td_Vj;
  this._eq = function (td_4y) {
    return td_4y === this.os_name;
  };
  this._ne = function (td_4y) {
    return td_4y !== this.os_name;
  };
  this._gt = function (td_4y) {
    return this.os_name > td_4y;
  };
  this._ge = function (td_4y) {
    return this.os_name >= td_4y;
  };
  this._lt = function (td_4y) {
    return this.os_name < td_4y;
  };
  this._le = function (td_4y) {
    return this.os_name <= td_4y;
  };
  this._in = function (td_4y) {
    var td_r6 = td_Vj.constructor === String ? [td_Vj] : td_Vj;
    var td_oj;
    for (td_oj = 0; td_oj < td_r6.length; td_oj++) {
      if (this.os_name === td_r6[td_oj]) {
        return true;
      }
    }
    return false;
  };
  this.getFontsList = function () {
    if (this.os_name === "mac") {
      return typeof td_4v === "object" ? td_4v : [];
    }
    if (this.os_name === "linux") {
      return typeof td_1a === "object" ? td_1a : [];
    }
    if (this.os_name === "win") {
      return typeof td_1x === "object" ? td_1x : [];
    }
    if (this.os_name === "ios") {
      return typeof td_4R === "object" ? td_4R : [];
    }
    if (this.os_name === "android") {
      return typeof td_3C === "object" ? td_3C : [];
    } else {
      return [];
    }
  };
}
function td_IU(td_4I) {
  var td_Qy = td_4I.toLowerCase();
  if (td_Qy === "explorer") {
    td_Qy = "ie";
  }
  this.browser_name = td_Qy;
  this._eq = function (td_4I) {
    return td_4I === this.browser_name;
  };
  this._ne = function (td_4I) {
    return td_4I !== this.browser_name;
  };
  this._in = function (td_4I) {
    var td_GK = td_4I.constructor === String ? [td_4I] : td_4I;
    var td_OP;
    for (td_OP = 0; td_OP < td_GK.length; td_OP++) {
      if (this.browser_name === td_GK[td_OP]) {
        return true;
      }
    }
    return false;
  };
}
function td_gg(td_Ub) {
  this.version = td_Ub;
  this._eq = function (td_Nh) {
    return this.version === parseInt(td_Nh);
  };
  this._ne = function (td_cD) {
    return this.version !== parseInt(td_cD);
  };
  this._gt = function (td_hT) {
    return this.version > parseInt(td_hT);
  };
  this._ge = function (td_cN) {
    return this.version >= parseInt(td_cN);
  };
  this._lt = function (td_T6) {
    return this.version < parseInt(td_T6);
  };
  this._le = function (td_SM) {
    return this.version <= parseInt(td_SM);
  };
}
td_1V.tdz_2f9eb8a9952241e3b22d6ba3957502f3 = new td_1V.td_3x("2f9eb8a9952241e3b22d6ba3957502f351075713034b535d7977405d43420041114c17025f0c067469675e5b4416401f0e05580b1459120701454a1275430c520e0300144e42204150545b585155035d4607094b57094f094b50565b595002564d425c03");
var td_1V = td_1V || {};
function td_0I() {
  try {
    var td_le = document.createElement("canvas");
    if (!td_le) {
      return null;
    }
    if (!td_le.getContext) {
      return null;
    }
    var td_d2 = td_le.getContext("2d");
    if (!td_d2) {
      return null;
    }
    if (!td_d2.font || !td_d2.fillText) {
      return null;
    }
    td_le.width = 300;
    td_le.height = 100;
    td_d2 = td_le.getContext("2d");
    var td_tv = "@Browsers~%fingGPRint$&,<canvas>";
    td_d2.font = "8px Arial";
    td_d2.fillText(td_tv, 0, 50);
    td_d2.font = "12px Arial";
    var td_kt = td_d2.createLinearGradient(0, 0, td_le.width, 0);
    td_kt.addColorStop("0", "magenta");
    td_kt.addColorStop("0.5", "blue");
    td_kt.addColorStop("1.0", "red");
    td_d2.fillStyle = td_kt;
    td_d2.fillText(td_tv, 0, 90);
    var td_Ky = td_le.toDataURL("image/png");
    if (!td_Ky) {
      return null;
    }
    return td_1q(td_Ky);
  } catch (td_Pp) {
    return null;
  }
}
td_1V.tdz_38910477f6fb4086984e19ec2e870bf8 = new td_1V.td_3x("38910477f6fb4086984e19ec2e870bf875514b54565b4f64075007105d");
var td_1V = td_1V || {};
function td_2F() {
  var td_ZM = 20;
  var td_gQ = 10;
  var td_mi = 10;
  var td_Xn = 0;
  var td_KO = null;
  var td_uG = function () {
    return window.performance.now() * 1e3;
  };
  var td_aR = function () {
    return performance.now().toFixed(3) / 1e3;
  };
  var td_tB = function () {
    return (td_g() - td_Xn).toFixed(3) * 1e3;
  };
  function td_iI() {
    var td_PG = 1;
    var td_S8 = td_KO();
    var td_xy = td_KO();
    while (td_xy === td_S8) {
      td_xy = td_KO();
      ++td_PG;
    }
    var td_YD = (td_xy - td_S8) * 1e6;
    var td_T4 = td_PG / td_YD;
    if (td_T4 < 1e-8) {
      return 1e-8;
    }
    return td_T4;
  }
  function td_ZW() {
    var td_lq = 0;
    var td_Zg = 0;
    try {
      var td_V1 = td_iI();
      td_lq = td_KO();
      td_Zg = td_KO() - td_lq;
      if (td_Zg === 0 || td_Zg < 1e-8) {
        td_Zg = td_V1;
      }
      for (var td_T4 = 0; td_T4 < td_ZM; ++td_T4) {
        td_Zg = td_XP(td_Zg, td_KO() - td_lq);
      }
      return Math.round(1 / td_Zg);
    } catch (td_K5) {
      return -1;
    }
  }
  function td_XP(td_K3, td_VJ) {
    try {
      if (td_K3 < 1e-8) {
        return td_VJ;
      }
      if (td_K3 < td_VJ) {
        return td_XP(td_VJ - Math.floor(td_VJ / td_K3) * td_K3, td_K3);
      } else {
        if (td_K3 === td_VJ) {
          return td_K3;
        } else {
          return td_XP(td_VJ, td_K3);
        }
      }
    } catch (td_Wm) {
      return 0;
    }
  }
  if (td_4O.td_1t !== "Firefox" && td_4O.td_1t !== "Safari" && typeof performance !== "undefined" && typeof performance.now !== "undefined") {
    td_KO = td_aR;
  } else {
    if (td_4O.td_1t !== "Safari" && typeof window.performance !== "undefined" && typeof window.performance.now !== "undefined") {
      td_KO = td_uG;
    } else {
      td_Xn = td_g();
      td_KO = td_tB;
    }
  }
  if (!td_KO || !Math || !Math.round || !Math.floor || !Math.sqrt || !Math.pow) {
    return null;
  }
  function td_I5() {
    var td_eY = [];
    for (var td_kx = 0; td_kx < td_gQ; ++td_kx) {
      td_eY.push(td_ZW());
    }
    var td_rO = td_1V.mean(td_eY);
    var td_ae = td_1V.std_dev(td_eY, td_rO);
    var td_F7 = 0;
    var td_nS = 0;
    if (td_ae !== 0) {
      var td_qK = td_1V.confidence_interval(td_eY, td_ae, td_rO, 1);
      td_nS = td_1V.mean(td_qK);
      td_F7 = Math.round(td_nS);
    } else {
      td_F7 = Math.round(td_rO);
    }
    return td_F7;
  }
  var td_fs = 0;
  var td_xZ = 0;
  while (td_fs === 0 && td_xZ++ < td_mi) {
    td_fs = td_I5();
  }
  return encodeURIComponent(td_fs);
}
function td_0c() {
  td_1M(td_0D, document);
}
td_1V.tdz_5b7506664f2440c0ae189b8f6c9c5088 = new td_1V.td_3x("5b7506664f2440c0ae189b8f6c9c5088410f4f185454425b4c4b415d50440e484c16585c080b5c1453025d0c5b5c414f50000d50535245577125766775604e025453636b78316b271b3372206601154e043d026678771b0401504551560a1143001754595d154a0f420653145e475d5a0f1044545a415d46410459514d430a57130b5556560c5b030653095106004b51513d455b540b10455d026d505544060d4716585c66164116535e1f105c546753501b0a13435f5269470f550912430a561358001e4a0b5e140b531f09530d");
var td_1V = td_1V || {};
if (typeof td_1V.td_1g === "undefined") {
  td_1V.td_1g = [];
}
var td_wk = "tmx-db";
var td_iu = "tmx-sid";
var td_Ft = "tmx-sid1";
var td_hN = window.crypto || window.msCrypto;
var td_cq = typeof td_hN !== "undefined" ? td_hN.subtle || td_hN.webkitSubtle : null;
var td_g9 = false;
function td_3J() {
  try {
    var td_fU = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    if (!td_hN || !td_cq || !td_fU) {
      return;
    }
    var td_TX = td_fU.open(td_wk, 1);
    td_TX.onupgradeneeded = function () {
      td_TX.result.createObjectStore(td_iu, {keyPath: "id"});
    };
    td_TX.onsuccess = function () {
      td_Uv(td_TX.result);
    };
    td_TX.onerror = function (td_nY) {};
  } catch (td_Dl) {}
}
function td_Uv(td_kX) {
  var td_AO = td_kX.transaction(td_iu, "readonly");
  var td_ZI = td_AO.objectStore(td_iu);
  var td_ML = td_ZI.get(td_Ft);
  td_ML.onsuccess = function () {
    if (td_ML.result === undefined || td_ML.result === null || td_ML.result.privateKey === null || td_ML.result.publicKey === null || td_ML.result.createTime === null || td_ML.result.type === null) {
      td_fN(td_kX, "web:ecdsa");
    } else {
      td_a9(td_ML.result.privateKey, td_ML.result.publicKey, td_qS(td_ML.result.createTime, td_ML.result.type));
    }
  };
}
function td_fN(td_vO, td_Wh) {
  try {
    var td_h2;
    if (td_Wh === "web:ecdsa") {
      td_h2 = td_cq.generateKey({name: "ECDSA", namedCurve: "P-256"}, false, ["sign"]);
    } else {
      td_h2 = td_cq.generateKey({name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: {name: "SHA-256"}}, false, ["sign"]);
    }
    if (typeof td_h2.then !== "undefined") {
      td_h2.then(function (td_Py) {
        td_Dm(td_vO, td_Py, td_Wh);
      }, function (td_wa) {
        if (td_Wh === "web:ecdsa") {
          td_fN(td_vO, "web:rsa");
        }
      });
    } else {
      td_h2.oncomplete = function (td_TM) {
        td_Dm(td_vO, td_TM.target.result, td_Wh);
      };
      td_h2.onerror = function (td_MT) {
        if (td_Wh === "web:ecdsa") {
          td_fN(td_vO, "web:rsa");
        }
      };
    }
  } catch (td_MU) {
    if (td_Wh === "web:ecdsa") {
      td_fN(td_vO, "web:rsa");
    }
  }
}
function td_Dm(td_V3, td_C8, td_iD) {
  try {
    var td_Cf = td_V3.transaction(td_iu, "readwrite");
    var td_Y5 = td_Cf.objectStore(td_iu);
    var td_IS = Math.floor(td_g() / 1e3);
    var td_YH = td_Y5.put({id: td_Ft, publicKey: td_C8.publicKey, privateKey: td_C8.privateKey, createTime: td_IS, type: td_iD});
    td_YH.onsuccess = function () {
      td_a9(td_C8.privateKey, td_C8.publicKey, td_qS(td_IS, td_iD));
    };
    td_YH.onerror = function () {
      if (td_iD === "web:ecdsa") {
        td_fN(td_V3, "web:rsa");
      }
    };
  } catch (td_xZ) {
    if (td_iD === "web:ecdsa") {
      td_fN(td_V3, "web:rsa");
    }
  }
}
function td_qS(td_z8, td_jK) {
  var td_FY = td_g9 ? td_2S : td_2m;
  return {rnd: td_1W(16), nonce: td_FY, date: td_z8, type: td_jK};
}
function td_Nt(td_Q1, td_jo) {
  try {
    return td_cq.exportKey(td_Q1, td_jo);
  } catch (td_qi) {
    return null;
  }
}
function td_a9(td_zR, td_at, td_KO) {
  var td_JC = td_Nt("spki", td_at);
  if (td_JC === null) {
    td_JC = td_Nt("jwk", td_at);
    td_KO.type = "web:rsajwk";
  }
  if (td_JC === null || typeof td_JC === "undefined") {
    return;
  }
  if (typeof td_JC.then !== "undefined") {
    td_JC.then(function (td_Br) {
      td_KO.pubkey = td_pZ(td_Br);
      td_Cs(td_zR, td_KO);
    });
  } else {
    td_JC.oncomplete = function (td_K7) {
      td_KO.pubkey = td_pZ(td_K7.target.result);
      td_Cs(td_zR, td_KO);
    };
  }
}
function td_Cs(td_tW, td_h1) {
  try {
    var td_wl;
    if (td_h1.type === "web:ecdsa") {
      td_wl = td_cq.sign({name: "ECDSA", hash: {name: "SHA-256"}}, td_tW, td_um(td_h1));
    } else {
      td_wl = td_cq.sign({name: "RSASSA-PKCS1-v1_5", hash: {name: "SHA-256"}}, td_tW, td_um(td_h1));
    }
    if (typeof td_wl.then !== "undefined") {
      td_wl.then(function (td_YX) {
        if (td_h1.type === "web:ecdsa") {
          td_h1.sig = td_O3(td_BJ(td_pZ(td_YX.slice(0, 32))) + td_BJ(td_pZ(td_YX.slice(32, 64))));
        } else {
          td_h1.sig = td_pZ(td_YX);
        }
        td_F3(td_h1);
      }, function (td_dN) {});
    } else {
      td_wl.oncomplete = function (td_Dj) {
        td_h1.sig = td_pZ(td_Dj.target.result);
        td_F3(td_h1);
      };
    }
  } catch (td_Pz) {}
}
function td_um(td_Ac) {
  var td_ER = [];
  var td_nt = td_Ac.rnd + td_Ac.nonce + td_Ac.date + td_Ac.type;
  for (var td_JG = 0; td_JG < td_nt.length; td_JG++) {
    td_ER.push(td_nt.charCodeAt(td_JG));
  }
  return new Uint8Array(td_ER);
}
function td_pZ(td_SO) {
  return Array.prototype.map.call(new Uint8Array(td_SO), td_OD).join("");
}
function td_OD(td_Xl) {
  return ("00" + td_Xl.toString(16)).slice(-2);
}
function td_BJ(td_uf) {
  if (td_uf[0] >= "8") {
    return "02" + td_OD(td_uf.length / 2 + 1) + "00" + td_uf;
  } else {
    return "02" + td_OD(td_uf.length / 2) + td_uf;
  }
}
function td_O3(td_lx) {
  return "30" + td_OD(td_lx.length / 2) + td_lx;
}
function td_F3(td_Gs) {
  var td_Xu = "sid_rnd=" + td_Gs.rnd + "&sid_date=" + td_Gs.date + "&sid_type=" + td_Gs.type + "&sid_key=" + td_Gs.pubkey + "&sid_sig=" + td_Gs.sig;
  td_Xu += td_g9 ? "&sifr=1" : "&sifr=0";
  var td_O6 = td_4l + "&jf=" + td_1V.td_0i(td_Xu, td_0M);
  td_1M(td_O6, document);
}
function td_2N() {
  td_1V.td_2o();
  td_1V.td_2l(document);
  td_Q();
  td_g9 = true;
  td_3J();
}
td_1V.td_1g.push(function () {
  var td_2n = new td_1V.td_3x("01220f8ff5474408a9c4dcfad81eff8d58454642435C174915475719515651414C4C101A070C0B4E02481E060A035916011F425C575D7B2F3506677E7009737B570B540455255651560D735557577E257505740A03227E5F2371727570760F57135E3C5D005E13120854410C05561E175542415B5F08670F020806040D0C5208530A00045D5B07585C0F02000551015C55175C5D5E055D5B0203070E070651095901540600510751560B085D04560A5753010B0A515F0051555057000D0C555C570A5A07560257595C0F0301540708005605025708005C040754570E0D0755");
  td_2m = "df40e8fdbaac993e";
  td_4l = "https://src.ebay-us.com/fp/clear1.png;CIS3SID=CC62701F0025B011FAE4F83DF9EDFBDB?org_id=usllpic0&session_id=2398b023c098a9873ec798e&nonce=d63932a18872d2a0";
  td_0M = "2398b023c098a9873ec798e";
  td_3I = "d63932a18872d2a0";
});
td_1V.tdz_4ad8ab9453c84946b0a6f93705f6d75b = new td_1V.td_3x("4ad8ab9453c84946b0a6f93705f6d75b4413104d14154f4e4d16547a110e761355734401251c04714e544300545c57075111164c14174e424f4b460f7643110120155675430e75120771171353754f17411313491f470e764f16547b110e774847072257075a4344414143012746431b1156271d5620434e100420464a481101204a1442174f4a1207731644154241154310141d562043110271460f771c037018414401241c0475454018401d491055761b1c4944557b110271164d434f4c13557244012443160074105175410073470323055902005c5652550b505e5a595a0d5f3860356a67474341134212414d131156264244557d110277144055585646104a1442114f4a491502244c1d1202214a1f05590a005c505255460e04515e5c12421b43124e454e4e1051741e4e1055771f1a594454095757560e5f53505c5d0d40134c134d4441494b4301264d4c4703221a4600470f045651065a535f5a46104a1442114f4a491502244c1d1202214a1f055903005c50525502505f5244441845154110404d1207771c4f4100761c4a00410e51075b5152431142414d43401b4e440124434a120776184805565f00500502560e0a5257585e0c484649414315461813517a1600724f1c13537410557219051d57525f565157055655515e590e54085837686064676130600b5913085502590947085c09");
var td_1V = td_1V || {};
var td_3L = "prtuuwvzx%7B%7B%7C%7C%7F~a%60kbee";
var td_3r = "prtuuwvzx%7Bz%7B%7C%7F%7D";
var td_3y = "q%7Bzuurwq~%7Bz%7C%7C~%7Caac";
var td_3u = "psqt%7Cqvy%7C%7Bzz%7C~~";
var td_0N = "q%7Bzutqvy%7F";
var td_3e = "prqutwwqp%7Bz%7B%7C%7Fz";
var td_1d = "q%7B%7Buu~vy~%7Bzx";
var td_0E = "q%7B%7Buuwvx%7B%7Bz%7D%7C%7F%7BaacbebgfhhjcmlooYVSST";
var td_2E = "pstutvvxq%7Bz%7D%7Dwxaab";
var td_4G = "przutwvy~%7Bzy%7C~~aakbedgf%60hjj";
var td_4a = "przutwvy~%7Bzy%7C~~a%60cbemggihko";
var td_0V = "przutwvy~%7Bzy%7C~~a%60cbebgfn";
var td_1E = "przutwvy~%7Bzy%7C~~aabbedgfahkk";
var td_4Q = "przutwvy~%7Bzy%7C~~a%60ebeg";
var td_0m = "przutwvy~%7Bzy%7C~~aajbddfnohkcmmo";
var td_1u = "prpuuwvy%7C%7Bzz%7C%7Fxa%60fbddfnahjoldinQQSSWTVV";
var td_W = 1;
var td_t = 0;
function td_2X(td_x, td_B, td_O, td_M) {
  return td_c(td_x, td_B, td_O, null, td_M);
}
function td_c(td_x, td_M, td_e, td_i, td_V) {
  var td_O = td_1V.td_2V(decodeURIComponent(td_M));
  if (td_O === null) {
    return;
  }
  if (typeof td_i !== "undefined" && td_i !== null) {
    return td_q(td_x, td_O, td_e, td_V);
  } else {
    return td_T(td_x, td_O, td_e, td_V);
  }
}
function td_T(td_e, td_w, td_z, td_G) {
  if (td_e.attachEvent) {
    td_e.attachEvent("on" + td_w, function (td_S) {
      td_z(td_S || window.event);
    });
  } else {
    if (typeof td_G === "undefined") {
      td_e.addEventListener(td_w, td_z, false);
    } else {
      td_e.addEventListener(td_w, td_z, td_G);
    }
  }
}
function td_q(td_S, td_D, td_V, td_n) {
  if (typeof td_S.addEventListener !== "undefined") {
    if (typeof td_n === "undefined") {
      td_S.addEventListener(td_D, td_V, false);
    } else {
      td_S.addEventListener(td_D, td_V, td_n);
    }
  } else {
    td_S.attachEvent("on" + td_D, function (td_B) {
      td_V(td_B || window.event);
    });
  }
}
function td_2Z(td_F, td_K, td_S) {
  return td_Y(td_F, td_K, td_S, null);
}
function td_Y(td_K, td_e, td_k, td_E) {
  var td_i = td_1V.td_2V(decodeURIComponent(td_e));
  if (td_i === null) {
    return;
  }
  if (typeof td_E !== "undefined" && td_E !== null) {
    return td_u(td_K, td_i, td_k);
  } else {
    return td_p(td_K, td_i, td_k);
  }
}
function td_p(td_r, td_E, td_x, td_F) {
  if (td_r.detachEvent) {
    td_r["e" + td_E + td_x] = td_x;
    td_r[td_E + td_x] = function () {
      td_r["e" + td_E + td_x](window.event);
    };
    td_r.detachEvent("on" + td_E, td_r[td_E + td_x]);
  } else {
    td_r.removeEventListener(td_E, td_x, td_F);
  }
}
function td_u(td_O, td_G, td_B, td_K) {
  if (typeof td_O.removeEventListener !== "undefined") {
    if (typeof td_K === "undefined") {
      td_O.removeEventListener(td_G, td_B, false);
    } else {
      td_O.removeEventListener(td_G, td_B, td_K);
    }
  } else {
    td_O["e" + td_G + td_B] = td_B;
    td_O[td_G + td_B] = function () {
      td_O["e" + td_G + td_B](window.event);
    };
    td_O.detachEvent("on" + td_G, td_O[td_G + td_B]);
  }
}
function td_P(td_O) {
  var td_F = td_O;
  var td_N = 500;
  var td_o = 3e4;
  var td_M = [];
  var td_E = 0;
  this.addFeature = function (td_e, td_K) {
    if (typeof td_K === "undefined" || td_K < td_N) {
      td_K = td_N;
    }
    var td_k = Math.ceil(td_K / td_N);
    td_M.push([td_e, td_k, true]);
    td_e.setup();
  };
  this.getFeaturesForTest = function () {
    return td_M;
  };
  this.start = function () {
    if (td_M.length === 0) {
      return;
    }
    setTimeout(td_G, td_N);
  };
  this.check = function () {
    td_G();
  };
  function td_G() {
    var td_r;
    var td_S = "";
    var td_e = 0;
    td_E++;
    for (td_r = 0; td_r < td_M.length; td_r++) {
      var td_K = td_M[td_r][0];
      var td_f = td_M[td_r][1];
      var td_B = td_M[td_r][2];
      if (!td_B) {
        td_e++;
        continue;
      }
      if (td_E >= td_f) {
        var td_b = td_K.getFPParams();
        if (td_b !== null) {
          td_S += td_b;
        }
        if (!td_K.tryAgain()) {
          td_M[td_r][2] = false;
          td_e++;
        } else {}
      }
    }
    if (td_S.length > 0) {
      var td_x = null;
      switch (td_F) {
        case 0:
          td_x = td_2L + "&jac=1&je=" + td_1V.td_0i(td_S, td_0M);
          break;
        case 1:
        default:
          td_x = td_0L + "&jac=1&je=" + td_1V.td_0i(td_S, td_0M);
          break;
      }
      td_1X(td_x, document);
    }
    if (td_E >= Math.ceil(td_o / td_N)) {
      return;
    }
    if (td_e < td_M.length) {
      setTimeout(td_G, td_N);
    } else {}
  }
}
var td_1j = new td_P(td_W);
var td_1p = new td_P(td_t);
td_1V.tdz_939d3c887cfa4546a209e84d6507a52a = new td_1V.td_3x("939d3c887cfa4546a209e84d6507a52a1f4354594a064b5658372332607175622066756a3173713d755d42580c50730f5d41560d570a6859530a36095b5b51791157425823514601505a487219455e0e4b564b375205594a5e560307010350530407070e045e");
var td_1V = td_1V || {};
function td_4g() {
  var td_Gu;
  var td_KR;
  var td_zY = td_4O.td_1t;
  var td_Ya = parseInt(td_4O.td_4t);
  var td_jF = td_4O.td_3q;
  var td_CW = td_4O.td_3B;
  this.tryAgain = function () {
    return false;
  };
  this.getFPParams = function () {
    var td_Ua = "&pm=";
    if (typeof td_Gu === "undefined") {
      if (typeof td_KR !== "undefined" && td_KR.readyState === "done") {
        td_Gu = td_KR.result ? false : true;
      } else {
        return null;
      }
    }
    td_Ua += td_Gu ? "yes" : "no";
    return td_Ua;
  };
  function td_qb() {
    if (navigator && typeof navigator.storage !== "undefined" && typeof navigator.storage.estimate !== "undefined") {
      navigator.storage.estimate().then(function (td_qd) {
        td_Gu = td_qd.quota < 12e7;
      });
    } else {
      td_Gu = false;
    }
  }
  function td_ps() {
    function td_cn(td_sq) {}
    navigator.webkitTemporaryStorage.requestQuota(12e7, function (td_pQ) {
      td_Gu = td_pQ < 12e7;
    }, td_cn);
  }
  function td_mI() {
    if (window.openDatabase) {
      try {
        var td_ei = window.openDatabase(null, null, null, null);
      } catch (td_W5) {
        td_Gu = true;
      }
    } else {
      td_Gu = null;
    }
  }
  function td_oq() {
    if (!window.localStorage) {
      return;
    }
    var td_WX = 0;
    try {
      td_Gu = false;
      var td_hJ = "";
      for (; td_WX < 11e4; ++td_WX) {
        td_hJ += "TESTDATA";
      }
      td_WX = 0;
      for (; td_WX < 5; ++td_WX) {
        window.localStorage.setItem("TESTKEY" + td_WX, td_hJ);
      }
      td_Gu = true;
      for (; td_WX > 0; --td_WX) {
        window.localStorage.removeItem("TESTKEY" + td_WX);
      }
    } catch (td_VI) {
      td_Gu = false;
      if (typeof td_VI.code !== "undefined" && td_VI.code === DOMException.QUOTA_EXCEEDED_ERR) {}
      try {
        for (; td_WX > 0; --td_WX) {
          window.localStorage.removeItem("TESTKEY" + td_WX);
        }
      } catch (td_VI) {}
    }
  }
  this.setup = function () {
    if (td_zY === "Chrome" && td_Ya >= 76) {
      td_Gu = false;
      if (!td_jF) {
        td_qb();
      } else {
        switch (td_CW) {
          case "Android":
            td_ps();
            break;
          case "iPad":
          case "iPhone":
            td_mI();
            break;
          default:
            break;
        }
      }
    } else {
      if (td_zY === "Opera" || td_zY === "Chrome") {
        if (window.webkitRequestFileSystem) {
          window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
            td_Gu = false;
          }, function (td_S1) {
            td_Gu = true;
          });
        } else {
          if (window.openDatabase) {
            td_mI();
          }
        }
      } else {
        if (td_zY === "Firefox" && window.indexedDB) {
          if (typeof td_KR === "undefined") {
            try {
              td_KR = window.indexedDB.open("test");
            } catch (td_u7) {
              td_Gu = true;
            }
          }
        } else {
          if (td_zY === "Explorer" && td_Ya >= 10) {
            td_Gu = false;
            try {
              if (!window.indexedDB) {
                td_Gu = true;
              }
            } catch (td_u7) {
              td_Gu = true;
            }
          } else {
            if (td_zY === "Safari") {
              td_Gu = false;
              if (td_jF === true && td_Ya < 12 || td_Ya >= 11.1 && td_Ya < 12) {
                td_mI();
              } else {
                if ((td_Gu === null || td_Gu === false) && td_Ya >= 12) {
                  td_oq();
                }
              }
              if (td_Gu === null || td_Gu === false && window.localStorage) {
                try {
                  window.localStorage.setItem("5ef56dee577af", 1);
                } catch (td_u7) {
                  td_Gu = true;
                }
                if (typeof td_Gu === "undefined") {
                  window.localStorage.removeItem("5ef56dee577af");
                }
              }
            }
          }
        }
      }
    }
  };
}
var td_1V = td_1V || {};
function td_3W() {
  td_1V.load_iframe(td_3G, td_3l, document);
}
td_1V.tdz_1bd3e6df8a924def9d8b6b3fefbb3308 = new td_1V.td_3x("1bd3e6df8a924def9d8b6b3fefbb33080a42216b3169100340154c40513b030f55105d1069035d0f160916105c43595b662726782c623b2360356646511c11134b0167045f0e47031739030c5a405f4c430d145a067b2b3c672461666b10001e4d114a0769045a0a1103103d525d594b5e16165c155f07285715195342050c0a5806540750175d05110f0d0c6476727f7d3d0056074303394a04575651160014660d5604590d510c000516114741595656441354094059404f06554009");
var td_1V = td_1V || {};
function td_1T() {
  try {
    var td_D6 = td_nF();
    if (td_D6 === 0 || td_D6 === -1) {
      return;
    }
    var td_Io = td_D6.gl;
    var td_OB = td_D6.name;
    td_OB += td_Io.getParameter(td_Io.VERSION);
    td_OB += td_Io.getParameter(td_Io.SHADING_LANGUAGE_VERSION);
    td_OB += td_Io.getParameter(td_Io.VENDOR);
    td_OB += td_Io.getParameter(td_Io.RENDERER);
    var td_zj = [];
    try {
      td_zj = td_Io.getSupportedExtensions();
    } catch (td_eE) {}
    var td_Vt = td_zj.length;
    if (td_Vt) {
      var td_HK = "";
      for (var td_gy = 0; td_gy < td_Vt; td_gy++) {
        if (td_HK.length) {
          td_HK += "; ";
        }
        td_HK += td_zj[td_gy];
      }
      td_OB += td_HK;
    }
    var td_KS;
    var td_eE = td_Io.getExtension("EXT_texture_filter_anisotropic") || td_Io.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || td_Io.getExtension("MOZ_EXT_texture_filter_anisotropic");
    if (td_eE) {
      td_KS = td_Io.getParameter(td_eE.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      if (td_KS === 0) {
        td_KS = 2;
      }
    } else {
      td_KS = "Not available";
    }
    td_OB += td_KS;
    return td_OB;
  } catch (td_eE) {
    return null;
  }
}
function td_4H() {
  try {
    var td_PM = td_nF();
    if (td_PM === 0 || td_PM === -1) {
      return;
    }
    var td_lU = td_PM.gl;
    if (typeof td_lU.getExtension !== "function" || typeof td_lU.getParameter !== "function") {
      return null;
    }
    var td_sX = td_lU.getExtension("WEBGL_debug_renderer_info");
    if (!td_sX || typeof td_sX !== "object") {
      return null;
    }
    var td_Bx = "";
    var td_W4 = td_lU.getParameter(td_sX.UNMASKED_VENDOR_WEBGL);
    if (typeof td_W4 === "string") {
      td_Bx += "&wglv=" + encodeURIComponent(td_W4);
    }
    var td_nl = td_lU.getParameter(td_sX.UNMASKED_RENDERER_WEBGL);
    if (typeof td_nl === "string") {
      td_Bx += "&wglr=" + encodeURIComponent(td_nl);
    }
    return td_Bx;
  } catch (td_YE) {
    return null;
  }
}
td_1V.tdz_2f2f5a58fadf4fbb8a12fb04221e5d47 = new td_1V.td_3x("2f2f5a58fadf4fbb8a12fb04221e5d4751075c105412075c012c07025100050a510b5a5e0b0c5f44434042114012434f4b1c02570752010d50565c5f0354121a180c5e5c0911405551570657451c144457145b00025345404646434a140b0d0c5712415305071718124154175c0212400f4058005b5c1352000959405e00160c05510b140c04445a0f030b0c50425e515e5b140c515c");
var td_1V = td_1V || {};
var td_1z;
function td_1h() {
  try {
    var td_gz = td_4y.getFontsList();
    if (td_gz.length === 0) {
      return;
    }
    var td_au = document.createElement("canvas");
    if (!td_au || !td_au.getContext) {
      return;
    }
    var td_CG = td_au.getContext("2d");
    if (!td_CG) {
      return;
    }
    if (typeof td_CG.measureText === "undefined") {
      return;
    }
    var td_qn = "gMcdefghijklmnopqrstuvwxyz0123456789";
    td_CG.font = "72px monospace";
    var td_TQ = td_CG.measureText(td_qn).width;
    td_CG.font = "72px serif";
    var td_OI = td_CG.measureText(td_qn).width;
    var td_rI = td_g();
    var td_iG = 0;
    var td_uQ = 0;
    var td_X8 = "";
    var td_EV = false;
    for (var td_Wu = 0; td_Wu < td_gz.length; td_Wu++) {
      td_CG.font = "72px '" + td_gz[td_Wu] + "', monospace";
      var td_nU = td_CG.measureText(td_qn).width;
      td_CG.font = "72px '" + td_gz[td_Wu] + "', serif";
      var td_fZ = td_CG.measureText(td_qn).width;
      if (td_TQ !== td_nU || td_OI !== td_fZ) {
        td_uQ++;
        td_X8 += "," + td_gz[td_Wu];
      }
      if (td_1z > 0 && td_Wu % 5 === 0) {
        td_iG = td_g() - td_rI;
        if (td_iG > td_1z) {
          td_EV = true;
          break;
        }
      }
    }
    if (!td_X8) {
      return;
    }
    if (td_iG === 0) {
      td_iG = td_g() - td_rI;
    }
    var td_Ei = td_3f(td_X8);
    var td_nx = "";
    if (td_2r !== null) {
      td_nx += "&w=" + td_2r;
    }
    if (!td_EV) {
      td_nx += "&jfn=" + td_uQ + "&jfh=" + td_Ei + "&jftn=0:" + td_iG + ":" + td_uQ;
    } else {
      td_nx += "&jftn=1:" + td_iG + ":" + td_uQ;
    }
    var td_G3 = td_X8.length;
    var td_Tj = false;
    if (typeof td_2b !== "undefined") {
      td_Tj = td_2b;
    }
    if (td_G3 > 0 && td_Tj && !td_EV) {
      var td_YV = 1800;
      if (td_G3 > td_YV && td_4I._eq("ie") && td_3N._eq("6")) {
        var td_tt = td_X8.indexOf(",", td_YV);
        if (td_tt !== -1) {
          td_G3 = td_tt;
        }
      }
      td_nx += "&jfl=" + td_X8.substring(0, td_G3);
    }
    var td_va = td_0L + "&jd=" + td_1V.td_0i(td_nx, td_0M);
    td_1X(td_va, document);
  } catch (td_Bh) {}
}
td_1z = 500;
var td_1a = ["Andale Mono", "Arial", "Arial Black", "AR PL UKai CN", "AR PL UMing CN", "Batang", "Bitstream Vera Sans", "Comic Sans MS", "Courier New", "Cursor", "DejaVu LGC Sans", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Dotum", "Droid Sans", "FreeMono", "FreeSans", "FreeSerif", "gargi", "Garuda", "Georgia", "Hei", "Impact", "KacstArt", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Sans Narrow", "Lohit Bengali", "Loma", "Lucida Bright", "Lucida Sans", "Lucida Sans Typewriter", "Luxi Mono", "Mallige", "Meera", "Monospace", "mry_KacstQurn", "Mukti Narrow", "NanumGothic", "NanumMyeongjo", "Nimbus Sans L Condensed", "Norasi", "OpenSymbol", "ori1Uni", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Saab", "Sawasdee", "System", "TakaoPGothic", "Times", "Times New Roman", "TlwgMono", "TlwgTypewriter", "Tlwg Typist", "Tlwg Typo", "Trebuchet MS", "Ubuntu", "Ubuntu Condensed", "Ume Gothic", "Ume Mincho", "Ume P Gothic", "Ume P Mincho", "Ume UI Gothic", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Utopia", "Vemana2000", "Verdana", "Waree", "Webdings", "WenQuanYi Bitmap Song", "WenQuanYi Micro Hei", "WenQuanYi Zen Hei"];
var td_1x = ["18thCentury", "8514oem", "AcmeFont", "Adobe Arabic", "Agency FB", "Aharoni", "Aldhabi", "Alfredo", "Algerian", "Alien Encounters", "Almonte Snow", "Amethyst", "Andalus", "Aparajita", "Arabic Transparent", "Arabic Typesetting", "AR BERKLEY", "Arial Baltic", "Arial CE", "Arial CYR", "Arial Greek", "Arial Narrow", "Arial Rounded MT Bold", "Arial TUR", "Arial Unicode MS", "Arimo", "AR JULIAN", "Asimov", "Autumn", "Baby Kruffy", "Balthazar", "Baskerville", "Baskerville Old Face", "Bastion", "Batang", "BatangChe", "Bauhaus 93", "Bellerose", "Bell MT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "Birch Std", "Bitstream Vera Sans", "Blackadder ITC", "Blackoak Std", "BN Jinx", "BN Machine", "Bobcat", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Poster Compressed", "BolsterBold", "Book Antiqua", "Bookman Old Style", "Bookshelf Symbol 7", "Borealis", "BOUTON International Symbols", "Bradley Hand ITC", "Brandish", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brussels", "Calibri", "Calibri Light", "Californian FB", "Calisto MT", "Calligraphic", "Calvin", "Cambria", "Cambria Math", "Candara", "Candles", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Chaparral Pro", "Chaparral Pro Light", "Charlemagne Std", "Chiller", "Chinyen", "Clarendon", "Colbert", "Colonna MT", "Comic Sans MS", "Commons", "Consolas", "Constantia", "Coolsville", "Cooper Black", "Cooper Std Black", "Copperplate", "Corbel", "Cordia New", "CordiaUPC", "Corporate", "Courier New Baltic", "Courier New CE", "Cracked Johnnie", "Creepygirl", "Curlz MT", "DaunPenh", "David", "Dayton", "DejaVu Sans", "Deneane", "Detente", "DFKai-SB", "Digifit", "DilleniaUPC", "Distant Galaxy", "DokChampa", "Dominican", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "Emmett", "Engravers MT", "Enliven", "Eras Bold ITC", "Ethnocentric", "EucrosiaUPC", "Euphemia", "Expressway Rg", "FangSong", "Felix Titling", "Fingerpop", "Fixedsys", "Flubber", "Footlight MT Light", "Forte", "Frankfurter Venetian TT", "Franklin Gothic Book", "Franklin Gothic Medium Cond", "FrankRuehl", "FreesiaUPC", "Freestyle Script", "French Script MT", "Gabriola", "Gadugi", "Garamond", "Gazzarelli", "Gentium Basic", "Gentium Book Basic", "Geotype TT", "Giddyup Std", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Glockenspiel", "Gloucester MT Extra Condensed", "Good Times", "Goudy Old Style", "Goudy Stout", "Greek Diner Inline TT", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Hand Me Down S (BRK)", "Hansen", "Harlow Solid Italic", "Harrington", "Harvest", "HarvestItal", "Haxton Logos TT", "Heavy Heap", "Hei", "Helvetica", "Helvetica LT Std", "HelveticaNeueLT Com 107 XBlkCn", "Highboot", "High Tower Text", "Hobo Std", "Hollywood Hills", "Hombre", "Huxley Titling", "Imprint MT Shadow", "Induction", "Informal Roman", "IrisUPC", "Iskoola Pota", "Italianate", "JasmineUPC", "Jokerman", "Juice ITC", "Kai", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N B", "Kristen ITC", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic Std", "LetterOMatic!", "Levenim MT", "LilyUPC", "Limousine", "Lithos Pro Regular", "LittleLordFontleroy", "Lucida Bright", "Lucida Calligraphy", "Lucida Fax", "Lucida Handwriting", "Lucida Sans Typewriter", "Mael", "Magneto", "Maiandra GD", "Malgun Gothic", "Manorly", "Martina", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "MelodBold", "Mesquite Std", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "Minerva", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Minion Pro", "Miriam", "Mistral", "Modern", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "MoolBoran", "Moonbeam", "MS Gothic", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS Sans Serif", "MS Serif", "MS UI Gothic", "MT Extra", "Myanmar Text", "Mycalc", "Myriad Arabic", "Myriad Hebrew", "Myriad Pro", "Narkisim", "Nasalization", "Neon Lights", "Niagara Engraved", "Niagara Solid", "Nina", "Nirmala UI", "Notram", "November", "NSimSun", "Nueva Std", "Nueva Std Cond", "Nyala", "OCR A Extended", "OCR A Std", "Old English Text MT", "Onyx", "OpenSymbol", "OpineHeavy", "Orator Std", "Palace Script MT", "Palatino", "Papyrus", "Parchment", "Parry Hotter", "PenultimateLight", "Perpetua", "Perpetua Titling MT", "PhrasticMedium", "Pirate", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poplar Std", "PR Celtic Narrow", "Prestige Elite Std", "Pristina", "QuiverItal", "Rage Italic", "Ravie", "Rockwell", "Rockwell Condensed", "Rod", "Roland", "Rondalo", "Rosewood Std Regular", "RowdyHeavy", "Russel Write TT", "Sakkal Majalla", "Salina", "Script", "Script MT Bold", "Segoe Print", "Segoe UI Semilight", "Segoe UI Symbol", "SF Movie Poster", "Shonar Bangla", "Showcard Gothic", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Skinny", "Small Fonts", "Snap ITC", "Snowdrift", "Source Code Pro", "Splash", "Stencil", "Stencil Std", "Stephen", "SWGamekeys MT", "System", "Tarzan", "Tekton Pro", "Tekton Pro Cond", "Tekton Pro Ext", "Tempus Sans ITC", "Terminal", "Terminator Two", "Times New Roman Baltic", "Toledo", "Traditional Arabic", "Trajan Pro", "Tw Cen MT", "Urdu Typesetting", "Utsaah", "Valken", "Vani", "Vijaya", "Viner Hand ITC", "Vivaldi", "Vivian", "Vladimir Script", "Vrinda", "Waverly", "Whimsy TT", "Wide Latin", "Wingdings 2", "Woodcut", "X-Files", "Year supply of fairy cakes"];
var td_4v = ["Abadi MT Condensed Extra Bold", "Abadi MT Condensed Light", "Al Bayan Bold", "Al Bayan Plain", "American Typewriter Bold", "American Typewriter Condensed", "American Typewriter Light", "Apple Braille Outline 6 Dot", "Apple Braille Pinpoint 6 Dot", "AppleGothic Regular", "Apple LiGothic Medium", "Apple LiSung Light", "AppleMyungjo Regular", "Apple SD Gothic Neo", "Apple SD GothicNeo ExtraBold", "Apple SD Gothic Neo Regular", "Arial Bold", "Arial Bold Italic", "Arial Hebrew Bold", "Arial Italic", "Arial Narrow Bold", "Arial Narrow Bold Italic", "Arial Narrow Italic", "Avenir", "Avenir Black", "Avenir Next", "Avenir Next Bold", "Avenir Next Condensed", "Avenir Next Condensed Bold", "Avenir Next Demi Bold", "Avenir Next Heavy", "Avenir Next Regular", "Bangla MN Bold", "Bangla Sangam MN Bold", "Baskerville Bold", "Baskerville Bold Italic", "Baskerville SemiBold", "Baskerville SemiBold Italic", "Bell MT Bold", "Bell MT Italic", "Bernard MT Condensed", "Big Caslon Medium", "Book Antiqua", "Book Antiqua Bold", "Bookman Old Style", "Bookman Old Style Bold", "Bookshelf Symbol 7", "Braggadocio", "Britannic Bold", "Brush Script MT Italic", "Calibri", "Calibri Bold", "Calibri Light", "Calisto MT", "Calisto MT Bold", "Cambria", "Cambria Bold", "Cambria Math", "Candara Bold", "Century", "Century Gothic", "Century Gothic Bold", "Century Schoolbook", "Century Schoolbook Bold", "Chalkboard Bold", "Chalkboard SE", "Chalkboard SE Bold", "Cochin Bold", "Colonna MT", "Comic Sans MS Bold", "Consolas", "Consolas Bold", "Constantia", "Constantia Bold", "Cooper Black", "Copperplate Bold", "Copperplate Gothic Bold", "Copperplate Light", "Corbel", "Corbel Bold", "Corsiva Hebrew Bold", "Courier Bold", "Courier New Bold", "Courier New Italic", "Courier Oblique", "Curlz MT", "Damascus Bold", "Desdemona", "Devanagari MT Bold", "Didot Bold", "Edwardian Script ITC", "Engravers MT", "Engravers MT Bold", "Euphemia UCAS Bold", "Eurostile", "Eurostile Bold", "Footlight MT Light", "Franklin Gothic Book", "Franklin Gothic Book Italic", "Franklin Gothic Medium", "Franklin Gothic Medium Italic", "Futura Condensed ExtraBold", "Futura Medium", "Gabriola", "Garamond", "Garamond Bold", "Geeza Pro Bold", "Georgia Bold", "Gill Sans Bold", "Gill Sans MT", "Gill Sans MT Bold", "Gill Sans MT Italic", "Gill Sans Ultra Bold", "Gloucester MT Extra Condensed", "Goudy Old Style", "Goudy Old Style Bold", "Gujarati MT Bold", "Gujarati Sangam MN Bold", "Gulim", "GungSeo Regular", "Gurmukhi MN Bold", "Gurmukhi Sangam MN", "Gurmukhi Sangam MN Bold", "Haettenschweiler", "Harrington", "HeadLineA Regular", "Hei Regular", "Heiti SC Light", "Heiti TC Light", "Helvetica Bold", "Helvetica CY Bold", "Helvetica CY Plain", "Helvetica Light", "Helvetica Neue Bold", "Helvetica Neue Medium", "Helvetica Oblique", "Hiragino Kaku Gothic ProN W3", "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic StdN W8", "Hiragino Maru Gothic ProN W4", "Hiragino Mincho ProN W3", "Hiragino Mincho ProN W6", "Hiragino Sans GB W3", "Hiragino Sans GB W6", "Hoefler Text Black", "Hoefler Text Ornaments", "Imprint MT Shadow", "Kailasa Regular", "Kai Regular", "Kaiti SC", "Kaiti SC Black", "Kannada MN Bold", "Kannada Sangam MN Bold", "Kefa Bold", "Khmer MN Bold", "Kino MT", "Kokonor Regular", "Lucida Blackletter", "Lucida Bright", "Lucida Bright Demibold", "Lucida Bright Demibold Italic", "Lucida Bright Italic", "Lucida Calligraphy", "Lucida Calligraphy Italic", "Lucida Console", "Lucida Fax", "Lucida Fax Demibold", "Lucida Fax Regular", "Lucida Grande Bold", "Lucida Handwriting", "Lucida Handwriting Italic", "Lucida Sans", "Lucida Sans Demibold Italic", "Lucida Sans Typewriter", "Lucida Sans Typewriter Bold", "Lucida Sans Unicode", "Malayalam MN Bold", "Malayalam Sangam MN Bold", "Marion", "Marion Bold", "Marker Felt Thin", "Marlett", "Matura MT Script Capitals", "Meiryo", "Meiryo Bold", "Menlo Bold", "Microsoft Himalaya", "Microsoft Tai Le", "Microsoft Tai Le Bold", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "Mistral", "Modern", "Modern No. 20", "Mongolian Baiti", "Monotype Corsiva", "Monotype Sorts", "MS Gothic", "Mshtakan Bold", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MT Extra", "Myanmar MN Bold", "NanumGothic", "Nanum Gothic", "NanumGothic Bold", "NanumMyeongjo", "Nanum Myeongjo", "NanumMyeongjo Bold", "New Peninim MT Bold", "News Gothic MT", "News Gothic MT Bold", "Noteworthy Bold", "Onyx", "Optima Bold", "Optima Regular", "Oriya MN Bold", "Oriya Sangam MN Bold", "Osaka-Mono", "Palatino Bold", "Palatino Linotype", "Palatino Linotype Bold", "Papyrus Condensed", "PCMyungjo Regular", "Perpetua", "Perpetua Bold", "Perpetua Titling MT", "Perpetua Titling MT Bold", "PilGi Regular", "Playbill", "PMingLiU", "PMingLiU-ExtB", "PT Sans Bold", "PT Sans Caption Bold", "PT Sans Narrow Bold", "Raanana Bold", "Rockwell", "Rockwell Bold", "Rockwell Extra Bold", "Rockwell Italic", "SimHei", "SimSun", "Sinhala MN Bold", "Sinhala Sangam MN Bold", "Skia Regular", "Songti SC", "Songti SC Black", "Stencil", "STIXGeneral-Bold", "STIXGeneral-Regular", "STIXIntegralsD-Bold", "STIXIntegralsSm-Bold", "STIXIntegralsUp-Bold", "STIXIntegralsUpD-Bold", "STIXIntegralsUpD-Regular", "STIXIntegralsUp-Regular", "STIXIntegralsUpSm-Bold", "STIXNonUnicode-Bold", "STIXSizeFiveSym-Regular", "STIXSizeFourSym-Bold", "STIXSizeOneSym-Bold", "STIXSizeThreeSym-Bold", "STIXSizeTwoSym-Bold", "STIXVariants-Bold", "STXihei", "Tahoma Negreta", "Tamil MN Bold", "Tamil Sangam MN Bold", "Telugu MN Bold", "Telugu Sangam MN Bold", "Thonburi Bold", "Times Bold", "Times New Roman Bold", "Times New Roman Italic", "Times Roman", "Trebuchet MS Bold", "Tw Cen MT", "Tw Cen MT Bold", "Tw Cen MT Italic", "Verdana Bold", "Wide Latin", "Yuppy SC", "Yuppy SC Regular", "Yuppy TC", "Yuppy TC Regular"];
var td_3C = ["AR PL UKai CN", "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "Andale Mono", "Arial", "Arial Black", "Arial Unicode MS", "Baskerville", "Batang", "Bitstream Charter", "Bitstream Vera Sans", "Carrois Gothic SC", "Century Schoolbook L", "Comic Sans MS", "Courier 10 Pitch", "Courier New", "Cursor", "Cutive Mono", "Dancing Script", "DejaVu LGC Sans", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Dingbats", "Dotum", "Droid Sans", "Droid Sans Mono", "FreeMono", "FreeSans", "FreeSerif", "Garuda", "Gentium", "GentiumAlt", "Georgia", "Goudy", "Hei", "ITC Stone Serif", "Impact", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter", "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster", "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "Lohit Bengali", "Lohit Devanagari", "Lohit Gujarati", "Lohit Hindi", "Lohit Punjabi", "Lohit Tamil", "Loma", "Lucida Bright", "Lucida Sans", "Lucida Sans Typewriter", "Luxi Mono", "Mallige", "Meera", "Monaco", "Monospace", "MotoyaLMaru", "Mukti Narrow", "NanumBarunGothic", "NanumGothic", "NanumGothicCoding", "NanumMyeongjo", "Nimbus Mono L", "Nimbus Roman No9 L", "Nimbus Sans L", "Nimbus Sans L Condensed", "Norasi", "Noto Emoji", "Noto Naskh Arabic", "Noto Sans", "Noto Serif", "OldeEnglish", "OpenSymbol", "Palatino", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Roboto", "Saab", "Samyak Tamil", "Sans", "Sawasdee", "Serif", "Standard Symbols L", "System", "TakaoExGothic", "TakaoExMincho", "TakaoGothic", "TakaoMincho", "TakaoPGothic", "TakaoPMincho", "Times", "Times New Roman", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter", "Trebuchet MS", "URW Bookman L", "URW Chancery L", "URW Gothic L", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ume Gothic", "Ume Mincho", "Ume P Gothic", "Ume P Mincho", "Ume UI Gothic", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Utopia", "Vemana2000", "Verdana", "Waree", "Webdings", "WenQuanYi Bitmap Song", "WenQuanYi Micro Hei", "WenQuanYi Micro Hei Mono", "WenQuanYi Zen Hei", "Zawgyi-One", "gargi", "mry_KacstQurn", "ori1Uni"];
var td_4R = ["AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "Arial", "Arial Unicode MS", "Baskerville", "Bitstream Charter", "Carrois Gothic SC", "Century Schoolbook L", "Copperplate", "Courier 10 Pitch", "Courier New", "Cutive Mono", "Dancing Script", "DejaVu Sans", "DejaVu Sans Mono", "DejaVu Serif", "Didot", "Dingbats", "Droid Sans Mono", "FreeMono", "FreeSans", "FreeSerif", "Futura", "Garuda", "Georgia", "Gill Sans", "Helvetica", "Hoefler Text", "KacstArt", "KacstBook", "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter", "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster", "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kedage", "Khmer OS", "Khmer OS System", "Kinnari", "Liberation Mono", "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif", "Lohit Bengali", "Lohit Gujarati", "Lohit Hindi", "Lohit Punjabi", "Lohit Tamil", "Loma", "Lucida Grande", "Mallige", "Meera", "Monaco", "Monospace", "MotoyaLMaru", "Mukti Narrow", "NanumGothic", "NanumMyeongjo", "Nimbus Mono L", "Nimbus Roman No9 L", "Nimbus Sans L", "Norasi", "Noto Emoji", "Noto Naskh Arabic", "Noto Sans", "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Canadian Aboriginal", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Gujarati", "Noto Sans Gurmukhi", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Malayalam", "Noto Sans Myanmar", "Noto Sans Oriya", "Noto Sans SC", "Noto Sans Sinhala", "Noto Sans Symbols", "Noto Sans TC", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", "Noto Sans Yi", "Noto Serif", "OpenSymbol", "Optima", "Palatino", "Palatino Linotype", "Papyrus", "Phetsarath OT", "Pothana2000", "Purisa", "Rachana", "Rekha", "Roboto", "Saab", "Sans", "Sawasdee", "Serif", "Standard Symbols L", "Symbol", "TAMu_Kadambri", "TAMu_Kalyani", "TAMu_Maduram", "TSCu_Comic", "TSCu_Paranar", "TSCu_Times", "TakaoExGothic", "TakaoExMincho", "TakaoGothic", "TakaoMincho", "TakaoPGothic", "TakaoPMincho", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter", "Trebuchet MS", "URW Bookman L", "URW Chancery L", "URW Gothic L", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Umpush", "UnBatang", "UnDinaru", "UnDotum", "UnGraphic", "UnGungseo", "UnPilgi", "Untitled1", "Vemana2000", "Verdana", "Waree", "WenQuanYi Micro Hei", "WenQuanYi Micro Hei Mono", "Zawgyi-One", "gargi", "mry_KacstQurn", "ori1Uni"];
td_1V.tdz_1532dda4a36241b08da674be455e0235 = new td_1V.td_3x("1532dda4a36241b08da674be455e0235175f510f08155c120b520b47475442434c160855435a17085650472658405c58547a4357160547525c155754091711484159475247465f43594108435d5c0e134608155159421b094740555609170e58051715445e5a054350470843405e0e13415d0e140c0c5c410f58585d435f445a4b0b5c105d470058125f460a450f155f4257460f420e1259140e42404154445e50075c1059500f5812414f010d145e54455d410f42145c12044b050f12560e6f5b5947515b6b0a58125656010d");
var td_1V = td_1V || {};
var td_Uk = 255;
function td_1G() {
  td_4y = new td_D4(td_4O.td_1Y);
  td_4I = new td_IU(td_4O.td_1t);
  td_3N = new td_gg(td_4O.td_4t);
  var td_A3 = "";
  try {
    td_A3 += td_IY();
  } catch (td_mA) {}
  try {
    td_A3 += td_aB();
  } catch (td_mA) {}
  var td_Jp = navigator.userAgent ? "&jb=" + td_1V.td_0i("lq=" + encodeURIComponent(navigator.userAgent), td_0M) : "";
  var td_AX = td_0L + "&ja=" + td_1V.td_0i(td_A3, td_0M) + td_Jp;
  if (typeof td_4r !== "undefined") {
    var td_V8 = function () {
      setTimeout(function () {
        td_4r(td_0M);
      }, 2e3);
    };
  }
  td_1X(td_AX, document, td_V8);
}
function td_d7(td_NY) {
  ("use strict");
  try {
    if (typeof td_NY !== "number" || td_NY <= 0) {
      td_NY = 1;
    } else {
      if (!td_4O.td_3q) {
        if (td_4O.td_1t === "Chrome" || td_4O.td_1t === "Opera") {
          td_NY = Math.floor(td_NY);
          if (td_NY <= 0) {
            td_NY = 1;
          }
        }
      }
    }
  } catch (td_WY) {}
  return td_NY;
}
function td_wK(td_O0, td_UE) {
  ("use strict");
  var td_OA = td_O0 * td_UE;
  try {
    if (td_UE % 1 === 0) {
      return td_OA;
    }
    td_OA = Math.round(td_OA);
    for (var td_V3 = td_OA - 2; td_V3 < td_OA + 2; td_V3++) {
      if (td_V3 % 10 === 0) {
        return td_V3;
      }
    }
  } catch (td_Oo) {}
  return td_OA;
}
function td_lw() {
  try {
    var td_Zb = 1;
    if (window && window.devicePixelRatio) {
      td_Zb = window.devicePixelRatio;
    }
    td_Zb = td_d7(td_Zb);
    var td_wQ = 0;
    var td_xq = 0;
    var td_Bq = 0;
    var td_DH = 0;
    if (screen && screen.width && screen.height) {
      td_wQ = screen.width;
      td_xq = screen.height;
    } else {
      if (window && window.screen.width && window.screen.height) {
        td_wQ = window.screen.width;
        td_xq = window.screen.height;
      }
    }
    var td_w4 = "&f=" + td_wK(td_wQ, td_Zb) + "x" + td_wK(td_xq, td_Zb);
    if (window && window.screen && window.screen.availWidth && window.screen.availHeight) {
      td_Bq = window.screen.availWidth * td_Zb;
      td_DH = window.screen.availHeight * td_Zb;
    }
    if (td_Bq !== 0 && td_DH !== 0) {
      td_w4 += "&af=" + td_Bq + "x" + td_DH;
    }
    if (typeof window !== "undefined" && typeof window.screenX !== "undefined" && typeof window.screenY !== "undefined") {
      var td_vd = window.screenX * td_Zb;
      var td_wG = window.screenY * td_Zb;
      td_w4 += "&sxy=" + td_vd + "x" + td_wG;
    }
    var td_Qj = td_1V.td_0j("t");
    td_w4 += "&dpr=" + td_Qj.devicePixelRatio + "," + screen.width + "," + screen.height + "," + screen.availWidth + "," + screen.availHeight + "," + td_Qj.innerWidth + "," + td_Qj.innerHeight + "," + td_Qj.outerWidth + "," + td_Qj.outerHeight + "," + td_Qj.screenX + "," + td_Qj.screenY;
    return td_w4;
  } catch (td_Iq) {}
  return "";
}
function td_IY() {
  var td_tQ = new Date;
  td_tQ.setDate(1);
  td_tQ.setMonth(5);
  var td_MY = -td_tQ.getTimezoneOffset();
  td_tQ.setMonth(11);
  var td_vi = -td_tQ.getTimezoneOffset();
  var td_iM = Math.min(td_MY, td_vi);
  var td_hJ = Math.max(td_MY, td_vi) - td_iM;
  var td_IQ = td_iS ? td_iS.length : 0;
  var td_zi = [];
  for (var td_Bu = 0; td_Bu < td_IQ; td_Bu++) {
    td_zi[td_Bu] = td_iS[td_Bu].type;
  }
  var td_G1 = td_IQ > 0 ? "&mt=" + td_3f(td_zi.join()) + "&mn=" + td_IQ : "";
  var td_Gq = "";
  if (td_2r !== null) {
    td_Gq += "&w=" + td_2r;
  }
  td_Gq += "&c=" + td_iM + "&z=" + td_hJ + td_lw() + td_G1;
  td_Gq += "&scd=" + screen.colorDepth;
  td_Gq += "&lh=" + encodeURIComponent(location.href.substring(0, td_Uk));
  var td_Jx = encodeURIComponent(document.referrer.substring(0, td_Uk));
  if (typeof td_1Z === "string" && td_1Z.length > 0 && window !== window.top && td_Jx.length === 0) {
    td_Jx = td_1Z;
  }
  td_Gq += "&dr=" + td_Jx;
  var td_Ho = navigator.plugins;
  if (td_Ho.length) {
    var td_re = td_Ho.length;
    td_Gq += "&pl=" + td_re;
    var td_MR;
    for (td_Bu = 0; td_Bu < td_re; td_Bu++) {
      td_MR += td_Ho[td_Bu].name + td_Ho[td_Bu].description + td_Ho[td_Bu].filename + td_Ho[td_Bu].length;
    }
    td_Gq += "&ph=" + td_3f(td_MR);
  }
  td_Gq += "&hh=" + td_3f(td_0z + td_0M);
  if (td_4O.td_2U !== "unknown") {
    td_Gq += "&jso=" + encodeURIComponent(td_4O.td_2U);
  }
  if (td_4O.td_1t !== "unknown") {
    if (td_4O.td_4t !== "unknown") {
      td_Gq += "&jsb=" + encodeURIComponent(td_4O.td_1t + " " + td_4O.td_4t);
    } else {
      td_Gq += "&jsb=" + encodeURIComponent(td_4O.td_1t);
    }
  }
  if (td_4O.td_3B !== "unknown") {
    td_Gq += "&jsou=" + encodeURIComponent(td_4O.td_3B);
  }
  if (td_4O.td_4f !== "unknown") {
    td_Gq += "&jsbu=" + encodeURIComponent(td_4O.td_4f);
  }
  if (td_4O.td_3q === true) {
    td_Gq += "&jsmu=true";
  }
  if (typeof navigator !== "undefined") {
    if (typeof navigator.hardwareConcurrency === "number") {
      td_Gq += "&nhc=" + navigator.hardwareConcurrency;
    }
    if (typeof navigator.deviceMemory === "number") {
      td_Gq += "&ndm=" + navigator.deviceMemory;
    }
  }
  if (typeof Intl !== "undefined" && typeof Intl.DateTimeFormat !== "undefined") {
    var td_df = Intl.DateTimeFormat();
    if (td_df !== null && typeof td_df !== "undefined" && typeof td_df.resolvedOptions !== "undefined") {
      var td_Rh = td_df.resolvedOptions();
      if (td_Rh !== null && typeof td_Rh.timeZone === "string" && td_Rh.timeZone.length > 0) {
        td_Gq += "&tzd=" + encodeURIComponent(td_Rh.timeZone);
      }
    }
  }
  var td_j4 = td_1P();
  if (td_j4) {
    td_Gq += "&mathr=" + encodeURIComponent(td_j4);
  }
  if (typeof td_4Y === "undefined" || !td_4Y()) {
    td_1M(td_3S, document);
  }
  return td_Gq;
}
var td_gP = [];
var td_yg;
function td_aB() {
  var td_R2 = "";
  if (typeof td_3R !== "undefined") {
    var td_iB = td_3R();
    if (td_iB !== null) {
      td_R2 += "&p=" + td_iB;
    }
  }
  if (typeof td_0I !== "undefined") {
    var td_hL = td_0I();
    if (td_hL) {
      td_R2 += "&ex3=" + td_hL;
    }
  }
  if (typeof td_1T !== "undefined") {
    var td_yS = td_1T();
    if (td_yS) {
      td_R2 += "&gl_c=" + encodeURIComponent(td_yS) + "&gl_h=" + td_1q(td_yS);
    }
  }
  if (typeof td_4H !== "undefined") {
    var td_K0 = td_4H();
    if (td_K0) {
      td_R2 += td_K0;
    }
  }
  if (typeof td_4L !== "undefined") {
    td_4L();
  }
  if (typeof td_3A !== "undefined") {
    td_3A();
  }
  if (typeof td_4S !== "undefined") {
    td_4S();
  }
  if (typeof td_3W !== "undefined") {
    td_3W();
  }
  if (typeof td_3J !== "undefined") {
    td_3J();
  }
  if (typeof td_1h !== "undefined") {
    td_1h();
  }
  if (typeof td_0c !== "undefined") {
    td_0c();
  }
  if (typeof td_1j !== "undefined") {
    if (typeof td_2Y !== "undefined") {
      td_1j.addFeature(new td_2Y);
    }
    if (typeof td_4g !== "undefined") {
      td_1j.addFeature(new td_4g);
    }
    if (typeof td_3m !== "undefined") {
      td_1j.addFeature(new td_3m);
    }
    if (typeof td_0n !== "undefined") {
      td_1j.addFeature(new td_0n);
    }
  }
  if (typeof td_1p !== "undefined") {
    if (typeof td_0J !== "undefined") {
      td_1p.addFeature(new td_0J);
    }
    if (typeof td_1K !== "undefined") {
      td_1p.addFeature(new td_1K);
    }
    if (typeof td_2A !== "undefined") {
      td_1p.addFeature(new td_2A);
    }
  }
  if (typeof td_1A !== "undefined") {
    td_1A();
  }
  if (typeof td_2j !== "undefined") {
    td_gP[new td_2j(td_1L, td_4J, td_0w)];
  }
  if (typeof td_4E !== "undefined") {
    td_gP[new td_4E];
  }
  if (typeof td_3E !== "undefined") {
    td_gP[new td_3E(td_3M, td_0P, td_4Z)];
  }
  if (typeof td_1n !== "undefined") {
    td_gP[new td_1n(td_4n, td_4K, td_0l)];
  }
  if (typeof td_4k !== "undefined") {
    td_gP[new td_4k(td_0W, td_4e, td_1o)];
  }
  if (typeof td_4X !== "undefined" && typeof Object.create !== "undefined" && typeof String.prototype.toUpperCase !== "undefined") {
    td_gP[new td_4X(td_0T, td_1i, td_3V)];
  }
  if (typeof td_2s !== "undefined") {
    td_gP[new td_2s(td_1Q, td_3Q, td_2K)];
  }
  if (typeof td_2M !== "undefined") {
    td_2M();
  }
  if (typeof td_2e !== "undefined") {
    td_gP[new td_2e];
  }
  if (typeof td_2R !== "undefined") {
    var td_tY = td_2R();
    if (td_tY !== null) {
      td_R2 += td_tY;
    }
  }
  if (typeof td_4C !== "undefined") {
    td_4C();
  }
  if (typeof td_0y !== "undefined" && td_0y.length > 0 && typeof td_0e !== "undefined") {
    td_yg = new td_0e(td_4O.td_1Y, td_4O.td_1t, td_0y);
    if (td_yg.isValid()) {
      td_yg.scan();
    }
  }
  td_1V.load_iframe(td_3b, td_3l, document);
  if (typeof td_4i !== "undefined") {
    td_4i();
  }
  if (typeof td_1V.td_0H !== "undefined") {
    td_1V.td_0H();
  }
  if (typeof td_2F !== "undefined") {
    var td_PB = td_2F();
    if (td_PB) {
      td_R2 += "&ccd=" + td_PB;
    }
  }
  return td_R2;
}
td_0s();

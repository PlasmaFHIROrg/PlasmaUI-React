"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fhirVersion = exports.license = exports.status = void 0;
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
class ImplementationGuide {
}
exports.default = ImplementationGuide;
/**
 * This is a ImplementationGuide resource
 */
ImplementationGuide.resourceType = "ImplementationGuide";
/**
 * The status of this implementation guide. Enables tracking the life-cycle of the content.
 */
var status;
(function (status) {
    status[status["draft"] = 0] = "draft";
    status[status["active"] = 1] = "active";
    status[status["retired"] = 2] = "retired";
    status[status["unknown"] = 3] = "unknown";
})(status = exports.status || (exports.status = {}));
/**
 * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
 */
var license;
(function (license) {
    license[license["AAL"] = 0] = "AAL";
    license[license["Abstyles"] = 1] = "Abstyles";
    license[license["ADSL"] = 2] = "ADSL";
    license[license["Afmparse"] = 3] = "Afmparse";
    license[license["Aladdin"] = 4] = "Aladdin";
    license[license["AMDPLPA"] = 5] = "AMDPLPA";
    license[license["AML"] = 6] = "AML";
    license[license["AMPAS"] = 7] = "AMPAS";
    license[license["APAFML"] = 8] = "APAFML";
    license[license["Bahyph"] = 9] = "Bahyph";
    license[license["Barr"] = 10] = "Barr";
    license[license["Beerware"] = 11] = "Beerware";
    license[license["Borceux"] = 12] = "Borceux";
    license[license["Caldera"] = 13] = "Caldera";
    license[license["ClArtistic"] = 14] = "ClArtistic";
    license[license["Crossword"] = 15] = "Crossword";
    license[license["CrystalStacker"] = 16] = "CrystalStacker";
    license[license["Cube"] = 17] = "Cube";
    license[license["curl"] = 18] = "curl";
    license[license["diffmark"] = 19] = "diffmark";
    license[license["DOC"] = 20] = "DOC";
    license[license["Dotseqn"] = 21] = "Dotseqn";
    license[license["DSDP"] = 22] = "DSDP";
    license[license["dvipdfm"] = 23] = "dvipdfm";
    license[license["eGenix"] = 24] = "eGenix";
    license[license["Entessa"] = 25] = "Entessa";
    license[license["EUDatagrid"] = 26] = "EUDatagrid";
    license[license["Eurosym"] = 27] = "Eurosym";
    license[license["Fair"] = 28] = "Fair";
    license[license["FreeImage"] = 29] = "FreeImage";
    license[license["FSFAP"] = 30] = "FSFAP";
    license[license["FSFUL"] = 31] = "FSFUL";
    license[license["FSFULLR"] = 32] = "FSFULLR";
    license[license["FTL"] = 33] = "FTL";
    license[license["Giftware"] = 34] = "Giftware";
    license[license["GL2PS"] = 35] = "GL2PS";
    license[license["Glide"] = 36] = "Glide";
    license[license["Glulxe"] = 37] = "Glulxe";
    license[license["gnuplot"] = 38] = "gnuplot";
    license[license["HaskellReport"] = 39] = "HaskellReport";
    license[license["HPND"] = 40] = "HPND";
    license[license["ICU"] = 41] = "ICU";
    license[license["IJG"] = 42] = "IJG";
    license[license["ImageMagick"] = 43] = "ImageMagick";
    license[license["iMatix"] = 44] = "iMatix";
    license[license["Imlib2"] = 45] = "Imlib2";
    license[license["Intel"] = 46] = "Intel";
    license[license["IPA"] = 47] = "IPA";
    license[license["ISC"] = 48] = "ISC";
    license[license["JSON"] = 49] = "JSON";
    license[license["Latex2e"] = 50] = "Latex2e";
    license[license["Leptonica"] = 51] = "Leptonica";
    license[license["LGPLLR"] = 52] = "LGPLLR";
    license[license["Libpng"] = 53] = "Libpng";
    license[license["libtiff"] = 54] = "libtiff";
    license[license["MakeIndex"] = 55] = "MakeIndex";
    license[license["MirOS"] = 56] = "MirOS";
    license[license["MIT"] = 57] = "MIT";
    license[license["MITNFA"] = 58] = "MITNFA";
    license[license["Motosoto"] = 59] = "Motosoto";
    license[license["mpich2"] = 60] = "mpich2";
    license[license["MTLL"] = 61] = "MTLL";
    license[license["Multics"] = 62] = "Multics";
    license[license["Mup"] = 63] = "Mup";
    license[license["Naumen"] = 64] = "Naumen";
    license[license["NCSA"] = 65] = "NCSA";
    license[license["NetCDF"] = 66] = "NetCDF";
    license[license["Newsletr"] = 67] = "Newsletr";
    license[license["NGPL"] = 68] = "NGPL";
    license[license["NLPL"] = 69] = "NLPL";
    license[license["Nokia"] = 70] = "Nokia";
    license[license["NOSL"] = 71] = "NOSL";
    license[license["Noweb"] = 72] = "Noweb";
    license[license["NRL"] = 73] = "NRL";
    license[license["NTP"] = 74] = "NTP";
    license[license["OGTSL"] = 75] = "OGTSL";
    license[license["OML"] = 76] = "OML";
    license[license["OpenSSL"] = 77] = "OpenSSL";
    license[license["Plexus"] = 78] = "Plexus";
    license[license["PostgreSQL"] = 79] = "PostgreSQL";
    license[license["psfrag"] = 80] = "psfrag";
    license[license["psutils"] = 81] = "psutils";
    license[license["Qhull"] = 82] = "Qhull";
    license[license["Rdisc"] = 83] = "Rdisc";
    license[license["RSCPL"] = 84] = "RSCPL";
    license[license["Ruby"] = 85] = "Ruby";
    license[license["Saxpath"] = 86] = "Saxpath";
    license[license["SCEA"] = 87] = "SCEA";
    license[license["Sendmail"] = 88] = "Sendmail";
    license[license["SISSL"] = 89] = "SISSL";
    license[license["Sleepycat"] = 90] = "Sleepycat";
    license[license["SMLNJ"] = 91] = "SMLNJ";
    license[license["SMPPL"] = 92] = "SMPPL";
    license[license["SNIA"] = 93] = "SNIA";
    license[license["SWL"] = 94] = "SWL";
    license[license["TCL"] = 95] = "TCL";
    license[license["TMate"] = 96] = "TMate";
    license[license["TOSL"] = 97] = "TOSL";
    license[license["Unlicense"] = 98] = "Unlicense";
    license[license["Vim"] = 99] = "Vim";
    license[license["VOSTROM"] = 100] = "VOSTROM";
    license[license["W3C"] = 101] = "W3C";
    license[license["Wsuipa"] = 102] = "Wsuipa";
    license[license["WTFPL"] = 103] = "WTFPL";
    license[license["X11"] = 104] = "X11";
    license[license["Xerox"] = 105] = "Xerox";
    license[license["xinetd"] = 106] = "xinetd";
    license[license["Xnet"] = 107] = "Xnet";
    license[license["xpp"] = 108] = "xpp";
    license[license["XSkat"] = 109] = "XSkat";
    license[license["Zed"] = 110] = "Zed";
    license[license["Zlib"] = 111] = "Zlib";
})(license = exports.license || (exports.license = {}));
/**
 * The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.0. for this version.
 */
var fhirVersion;
(function (fhirVersion) {
})(fhirVersion = exports.fhirVersion || (exports.fhirVersion = {}));
//# sourceMappingURL=ImplementationGuide.js.map
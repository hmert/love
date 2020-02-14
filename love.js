(function () {

  var love = function() { return 'love'; };


  love.albanian = function () { return 'dashuri'; };
  love.arabic = function() { return 'الحب'; };
  love.armenian = function () { return 'Սեր'; };
  love.azerbaijani = function() { return 'sevgi'; };
  love.basque = function() { return 'maite'; };
  love.binary = function() { return '01101100 01101111 01110110 01100101'; };
  love.bosnian = function () { return 'ljubav'; };
  love.bulgarian = function() { return 'обичам'; };
  love.catalan = function() { return 'estimar'; };
  love.chinese = function() { return '爱'; };
  love.crotian = function () { return 'ljubav'; };
  love.czech = function() { return 'láska'; };
  love.danish = function() { return 'elsker'; };
  love.dutch = function() { return 'liefde'; };
  love.english = function() { return 'love'; };
  love.estonian = function() { return 'armastus'; };
  love.finnish = function() { return 'rakkaus'; };
  love.french = function() { return 'amour'; };
  love.german = function() { return 'Liebe'; };
  love.greek = function() { return 'αγάπη'; };
  love.gujarati = function() { return 'પ્રેમ'; };
  love.hindi = function() { return 'प्यार'; };
  love.indonesian = function() { return 'cinta'; };
  love.irish = function() { return 'grá'; };
  love.italian = function() { return 'amore'; };
  love.japanese = function() { return '愛'; };
  love.korean = function() { return '사랑'; };
  love.latin = function() { return 'amant'; };
  love.macedonian = function() { return 'сакам'; };
  love.mongolian = function() { return 'хайртай'; };
  love.polish = function() { return 'miłość'; };
  love.portuguese = function () { return 'amor'; };
  love.romanian = function() { return 'dragoste'; };
  love.russian = function() { return 'люблю'; };
  love.serbian = function () { return 'љубав'; };
  love.slovenian = function() { return 'ljubezen'; };
  love.spanish = function() { return 'amor'; };
  love.swedish = function() { return 'älskar'; };
  love.tamil = function() { return 'காதல்'; };
  love.thai = function() { return 'รัก'; };
  love.turkish = function() { return 'aşk'; };
  love.ukrainian = function() { return 'кохаю'; };
  love.urdu = function() { return 'محبت'; };
  love.vietnamese = function() { return 'yêu'; };
  love.persian = function() { return 'عشق'; };
  love.kinyarwanda = function() { return 'urukundo'; };
  love.emoji = function() { return '❤️'; };

  love.morseCode = function() { return '.-.. --- ...- .'; };

  love.map = function(array) { return array.map(love); };
  love.reduce = function(array) { return array.reduce(love); };

  love.valueOf = function() { return 1.7976931348623157E+10308 };
  love.not = function() { return -1.7976931348623157E+10308 };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = love;
  } else if (window) {
    window.love = love;
  }
}());

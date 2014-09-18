(function () {

  var love = function() { return 'love'; };


  love.arabic = function() { return 'الحب'; };
  love.azerbaijani = function() { return 'sevgi'; };
  love.basque = function() { return 'maite'; };
  love.bosnian = function() { return 'love'; };
  love.bulgarian = function() { return 'обичам'; };
  love.catalan = function() { return 'estimar'; };
  love.chinese = function() { return '爱'; };
  love.czech = function() { return 'láska'; };
  love.danish = function() { return 'elsker'; };
  love.dutch = function() { return 'liefde'; };
  love.english = function() { return 'love'; };
  love.estonian = function() { return 'armastus'; };
  love.finnish = function() { return 'rakkaus'; };
  love.french = function() { return 'amour'; };
  love.german = function() { return 'liebe'; };
  love.greek = function() { return 'αγάπη'; };
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
  love.portuguese = function () { return 'amo'; };
  love.romanian = function() { return 'dragoste'; };
  love.russian = function() { return 'люблю'; };
  love.slovenian = function() { return 'ljubezen'; };
  love.spanish = function() { return 'amar'; };
  love.swedish = function() { return 'älskar'; };
  love.tamil = function() { return 'காதல்'; };
  love.thai = function() { return 'รัก'; };
  love.turkish = function() { return 'aşk'; };
  love.ukrainian = function() { return 'люблю'; };
  love.urdu = function() { return 'محبت'; };
  love.vietnamise = function() { return 'yêu'; };

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

'
-- Data
Co Name: The New York Times Company
Co Site: nytco.com
Owners: Carlos Slim
Management: Ochs-Sulzberger family
Key People: Owners + Managment
Editor: 
'

'
Analysis (example)
 * Who is Washington Post tied to?
  * Jeff Bezos- 80% owner, great control
  * Amazon- 10% overlap ownership, great control by jeff bezos
'

db = { 'New York Times': '\nKey people: Carlos Slim, Ochs-Sulzberger family'
     , 'Quartz': '\nOwned by Atlantic Media Co. Key people: David G. Bradley'
     , 'Fossbytes': '\nIndian based company'
     , 'CNN': '\nTop level owned by Time Warner Inc. Key people: Jeff Bewkes'
     , 'Los Angeles Times': '\nOwned by Tronc. Justin Dearborn'
     , 'MarketWatch': '\nTop level owned by News Corp. Key people: Rupert Murdoch'
     , 'Washington Post': '\nOwned by Nash Holdings LLC. Key people: Jeff Bezos'
     , 'Fox News': '\nOwned by Fox Entertainment Group. Key people: Rupert Murdoch'
     , 'BBC News': '\nOwned by BBC. Key people: Sir David Clementi'
     };

// document.addEventListener('DOMContentLoaded', function() {

  var newsOutlets = document.getElementsByClassName('al-attribution-source');

  for (var i = 0; i < newsOutlets.length; i++) {
    outlet = newsOutlets[i];
    key = outlet.innerText;
    val = db[key] == undefined ? 'N/A' : db[key];
    outlet.innerText = key + ' - ' + val;
  }

// });

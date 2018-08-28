function header() {let html = '';html += '<!doctype html>';html += '<html lang="en">';html += '<head>';html += '<meta charset="utf-8">';html += '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">';html += '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">';html += '<title>rettiwt</title>';html += '</head>';html += '<body>';html += '';html += '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';html += '<a class="navbar-brand" href="/rettiwt/">rettiwt</a>';html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';html += '<span class="navbar-toggler-icon"></span>';html += '</button>';html += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';html += '<ul class="navbar-nav mr-auto">';html += '<li class="nav-item">';html += '<a class="nav-link" href="/rettiwt/">Home</a>';html += '</li>';html += '<li class="nav-item">';html += '<a class="nav-link" href="/rettiwt/leet/">Leet</a>';html += '</li>';html += '<li class="nav-item">';html += '<a class="nav-link" href="/rettiwt/rot/">Rot</a>';html += '</li>';html += '<li class="nav-item">';html += '<a class="nav-link" href="/rettiwt/ligature/">Ligature</a>';html += '</li>';html += '<li class="nav-item">';html += '<a class="nav-link" href="/rettiwt/link/">Link</a>';html += '</li>';html += '</ul>';html += '</div>';html += '</nav>';html += '<!--';html += '<span class="sr-only">(current)</span>';html += '-->';document.write(html);}function footer() {let html = '';html += '<footer class="bg-white text-black text-center py-3">';html += '<small>&copy; 2018 satokibi</small>';html += '</footer>';html += '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>';html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>';html += '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>';html += '</body>';html += '</html>';document.write(html);}let leet = {};leet.leet_ch = {'A': ['4', '@', '/'],'B': ['|3','8'],'C': ['(', '['],'D': ['|)', ')'],'E': ['3',],'F': ['|=', 'ph', '/='],'G': ['6', '9', '[,'],'H': ['#', '|-|', '9#'],'I': ['1', '!', '|'],'J': ['_|', '_/'],'K': ['X'],'L': ['1', '|'],'M': ['|v|', 'AA', '|/|'],'N': ['||', '^/'],'O': ['0', '()', '[]'],'P': ['|*', '|o'],'Q': ['(_,)', '()_'],'R': ['|2', '12'],'S': ['5', '$'],'T': ['7', '+'],'U': ['(_)', '|_|'],'V': ['/', '|/'],'W': ['//', 'vv', 'uu'],'X': ['}{'],'Y': ['j', '7'],'Z': ['2', '7_'],'0': ['O', 'D'],'1': ['I', 'L'],'2': ['Z'],'3': ['E'],'4': ['h', 'A'],'5': ['S'],'6': ['b', 'G'],'7': ['T', 'L', 'j'],'8': ['B'],'9': ['P'],};let rot = {};rot.rot_ch = {'A': 'ᗄ', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖵ', 'G': '⅁','H': 'H', 'I': 'I', 'J': 'ᒋ', 'K': '丬', 'L': 'ᒣ', 'M': 'W', 'N': 'N','O': 'O', 'P': 'd', 'Q': 'Ό', 'R': 'ᖈ', 'S': 'S', 'T': '⊥', 'U': 'ᑎ','V': 'ᐱ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z','a': 'ɐ', 'b': 'q', 'c': 'ↄ', 'd': 'p', 'e': 'ə', 'f': 'ɟ', 'g': 'ᵷ','h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ա', 'n': 'u','o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n','v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z','0': '0', '1': '⇂', '2': 'ᘔ', '3': 'ε', '4': '߈', '5': 'S', '6': '9', '7': 'L', '8': '8', '9': '6','.': '˙', ',': '‘', ';': '؛', '!': '¡', '?': '¿', '&': '⅋',};let ligature = {};ligature.ligature_ch = [0x035c, 0x0318, 0x0323, 0x0354, 0x0359, 0x034e, 0x031c, 0x032b, 0x0317,0x034d, 0x035a, 0x0353, 0x035e, 0x031f, 0x0324, 0x0316, 0x0356, 0x0347,0x030d, 0x034b, 0x0300, 0x0346, 0x0313, 0x0305, 0x034a];function str_to_leet(str) {let leet_str = "";for( let ch of str ) {let rand = Math.random() * 100;if( rand > 70 ){leet_str += to_leet(ch);}else{leet_str += ch;}}return leet_str;}function to_leet(ch) {ch = ch.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) - 65248);});let ch_upper = ch.toUpperCase();if(ch_upper in leet.leet_ch){return leet.leet_ch[ch_upper][Math.floor(Math.random() * leet.leet_ch[ch_upper].length)];} else{return ch;}}function str_to_rot(str) {let rot_str = "";for( let ch of str ) {rot_str = to_rot(ch) + rot_str;}return rot_str;}function to_rot(ch) {ch = ch.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) - 65248);});if(ch in rot.rot_ch){return rot.rot_ch[ch];} else{return ch;}}function str_to_ligature(str) {let ligature_str = "";for( let ch of str ) {let rand = Math.random() * 100;if( rand > 50 ){if(check_half_alphnum(ch)) {ligature_str += String.fromCodePoint(ch.charCodeAt(), get_ligature_random());}else {ligature_str += ch;ligature_str += String.fromCodePoint(0x020, get_ligature_random());}}else{ligature_str += ch;}}return ligature_str;}/* japanese ==> 1,6,13,14,20,23 */function get_ligature(num) {return ligature.ligature_ch[num];}function get_ligature_random() {return ligature.ligature_ch[Math.floor(Math.random() * ligature.ligature_ch.length)];}function ligature_test(ch) {let str = "";let ch_code = ch.charCodeAt();for( let i in ligature.ligature_ch ) {str += String.fromCodePoint(ch_code, ligature.ligature_ch[i]);}return str;}function check_half_alphnum(ch){ch = (ch==null)?"":ch;if(ch.match(/^[A-Za-z0-9]*$/)){return true;}else{return false;}}
/**
 * Singlish Translator for Google Chrome 
 * 
 * @author : Pasindu Perera
 * @email : perera.pasindu@gmail.com
 * @website : https://github.com/rumal/singlish
 *
 */

chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.type = "bg2c")
                document.activeElement.value = document.activeElement.value.replace(request.original, request.replace);
        }
);

$(function() {
    $(document).on('mouseup', "input, textarea", function(e) {
        var selection = window.getSelection().toString();
        if (selection.length > 0) {
            var self = $(this);
            chrome.extension.sendMessage({text: selection, type: "c2bg"}, function(response) {
                var cur = self.val();
                self.val(cur.replace(response.original, response.replace));
            });
        }

    });
});

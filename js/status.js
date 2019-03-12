$(document).ready(function() {

                    $("#tabletr").empty();

                    a = localStorage.getItem("timetable");
                    var json = jQuery.parseJSON(a);

                    

                    for (var i = 0; i < json.length; i++) {


                        var subarray = json[i];



                        $("#statustable > tbody").append("<tr>");

                        for (var j = 0; j < subarray.length; j++) {



                            var temp = subarray[j];

                            console.log(temp);

                            if (/^[A-Z]/.test(temp))


                            {
                                $("#statustable > tbody").append("<td class = 'tutorial'>" + subarray[j] + "</td>");
                            } else if (/lab/.test(temp))

                            {
                                $("#statustable > tbody").append("<td class = 'lab'>" + subarray[j] + "</td>");
                            } else

                            {
                                $("#statustable > tbody").append("<td class = 'subject'>" + subarray[j] + "</td>");
                            }




                        }
                        $("#statustable > tbody").append("</tr>");

                    }


                 });


$(document).ready(function() {

                    $("#tabletrr").empty();

                    b = localStorage.getItem("timetables");
                    var json = jQuery.parseJSON(b);



                    for (var i = 0; i < json.length; i++) {


                        var subarrays = json[i];



                        $("#statustables > tbody").append("<tr>");

                        for (var j = 0; j < subarrays.length; j++) {



                            var temp = subarrays[j];

                            console.log(temp);

                            if (/^[A-Z]/.test(temp))


                            {
                                $("#statustables > tbody").append("<td class = 'tutorial'>" + subarrays[j] + "</td>");
                            } else if (/lab/.test(temp))

                            {
                                $("#statustables > tbody").append("<td class = 'lab'>" + subarrays[j] + "</td>");
                            } else

                            {
                                $("#statustables > tbody").append("<td class = 'subject'>" + subarrays[j] + "</td>");
                            }




                        }
                        $("#statustables > tbody").append("</tr>");

                    }


});
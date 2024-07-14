$('.ui.radio.checkbox')
  .checkbox()
  ;

$('#submit').click(function () {

  let output = `[block=20,20,white,white][center][img]https://i.imgur.com/LEWTXbL.png[/img]

[size=85][b]FIELD TRAINING OBSERVATIONAL REPORT[/b]
LOS SANTOS COUNTY SHERIFF'S DEPARTMENT — FIELD TRAINING PROGRAM[/size]
[hr][/hr][/center]

[transtable=Arial]
[tr]
[td][size=90][b]REPORT DATE[/b][/size][/td]
[td][size=90][b]REPORT TIME[/b][/size][/td]
[td][size=90][b]PHASE #[/b][/size][/td]
[/tr]
[tr]
[td][size=85]${$('input[name="date"]').val()}[/size][/td]
[td][size=85]${$('input[name="time"]').val()}[/size][/td]
[td][size=85]${$('input[name="phase"]').val()}[/size][/td]
[/tr]
[/transtable]

[transtable=Arial]
[tr]
[td][size=90][b]TRAINEE NAME[/b][/size][/td]
[td][size=90][b]EMPLOYEE NUMBER[/b][/size][/td]
[td][size=90][b]FTO NAME[/b][/size][/td]
[td][size=90][b]EMPLOYEE NUMBER[/b][/size][/td]
[/tr]
[tr]
[td][size=85]${$('input[name="trainee_first"]').val()} ${$('input[name="trainee_last"]').val()}[/size][/td]
[td][size=85]${$('input[name="trainee_serial"]').val()}[/size][/td]
[td][size=85]${$('input[name="fto_first"]').val()} ${$('input[name="fto_last"]').val()}[/size][/td]
[td][size=85]${$('input[name="fto_serial"]').val()}[/size][/td]
[/tr]
[/transtable]

[transtable=Arial]
[tr]
[td][size=90][b][center]GRADING SYSTEM[/center][/b][/size][/td]
[/tr]
[tr]
[td][justify][size=85][b]INSTRUCTIONS:[/b][/size]
[indent=25][size=85]S — A rating of S (Superior) denotes outstanding performance and shall only be attributed if the trainee exceeds expectations.[/size]
[size=85]C — A rating of C (Competent) is the minimum required to be considered at standard for a solo patrol deputy.[/size]
[size=85]N/I — A rating of N/I (Needs Improvement) shall be ticked to denote needing further training focused on a specific task.[/size]
[size=85]N/O — A rating of N/O (Not Observed) shall be ticked for all situations that were not encountered in the patrol.[/size]
[size=85]NRT — A rating of NRT (Not Responding to Training) shall be given if the trainee does not respond to training.[/size][/indent][/justify][/td]
[/tr]
[/transtable]

[table=Arial]
[tr]
[tdwidth=1,black,white,middle,center,45,2][size=90][b]ATTITUDE[/b][/size][/tdwidth]
[tdwidth=1,black,white,middle,center,10,2][size=90][center][b]RATING[/b][/center][/size][/tdwidth]
[td][size=90][center][b]COMMENTS[/b][/center][/size][/td]
[/tr]
[tr]
[td][size=85]Acceptance of Feedback/Criticism[/size][hr][/hr]
[size=85]Attitude toward Police Work[/size][hr][/hr]
[size=85]Integrity/Ethics[/size][hr][/hr]
[size=85]Leadership[/size][/td]
[td][center][size=85]${$('input[name="field1"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field2"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field3"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field4"]:checked').val()}[/size][/center][/td]
[td][size=85][center]${$('#attitude_comments').val()}[/center][/size][/td]
[/tr]
[tr][/tr]
[/table]

[table=Arial]
[tr]
[tdwidth=1,black,white,middle,center,45,2][size=90][b]RELATIONSHIPS[/b][/size][/tdwidth]
[tdwidth=1,black,white,middle,center,10,2][size=90][center][b]RATING[/b][/center][/size][/tdwidth]
[td][size=90][center][b]COMMENTS[/b][/center][/size][/td]
[/tr]
[tr]
[td][size=85]With Citizens/Community[/size][hr][/hr]
[size=85]With other Agencies' Members[/size][/td]
[td][center][size=85]${$('input[name="field6"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field7"]:checked').val()}[/size][/center][/td]
[td][size=85][center]${$('#relationships_comments').val()}[/center][/size][/td]
[/tr]
[tr][/tr]
[/table]

[table=Arial]
[tr]
[tdwidth=1,black,white,middle,center,45,2][size=90][b]PERFORMANCE[/b][/size][/tdwidth]
[tdwidth=1,black,white,middle,center,10,2][size=90][center][b]RATING[/b][/center][/size][/tdwidth]
[td][size=90][center][b]COMMENTS[/b][/center][/size][/td]
[/tr]
[tr]
[td][size=85]General Appearance[/size][hr][/hr]
[size=85]Driving Skill: All Conditions[/size][hr][/hr]
[size=85]Driving Skill: Emergency Driving[/size][hr][/hr]
[size=85]Report Writing: Grammar/Spelling/Neatness[/size][hr][/hr]
[size=85]Field Performance: Self-Initiated Field Activity[/size][hr][/hr]
[size=85]Field Performance: General Conditions[/size][hr][/hr]
[size=85]Officer Safety: General Conditions[/size][hr][/hr]
[size=85]Control of Conflict: General Conditions[/size][hr][/hr]
[size=85]Problem-solving Techniques/Decision-making[/size][hr][/hr]
[size=85]Radio Communications[/size][hr][/hr]
[size=85]Mobile Computer Terminal[/size][hr][/hr]
[size=85]Use of Map/GPS: Orientation/Response Time[/size][/td]
[td][center][size=85]${$('input[name="field5"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field8"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field24"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field9"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field10"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field11"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field12"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field13"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field14"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field15"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field16"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field17"]:checked').val()}[/size][/center][/td]
[td][size=85][center]${$('#performance_comments').val()}[/center][/size][/td]
[/tr]
[tr][/tr]
[/table]

[table=Arial]
[tr]
[tdwidth=1,black,white,middle,center,45,2][size=90][b]KNOWLEDGE[/b][/size][/tdwidth]
[tdwidth=1,black,white,middle,center,10,2][size=90][center][b]RATING[/b][/center][/size][/tdwidth]
[td][size=90][center][b]COMMENTS[/b][/center][/size][/td]
[/tr]
[tr]
[td][size=85]Department Policies and Procedures[/size][hr][/hr]
[size=85]Criminal Law[/size][hr][/hr]
[size=85]Criminal Procedure[/size][/td]
[td][center][size=85]${$('input[name="field18"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field19"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field20"]:checked').val()}[/size][/center][/td]
[td][size=85][center]${$('#knowledge_comments').val()}[/center][/size][/td]
[/tr]
[tr][/tr]
[/table]

[table=Arial]
[tr]
[tdwidth=1,black,white,middle,center,45,2][size=90][b](( ROLEPLAY ))[/b][/size][/tdwidth]
[tdwidth=1,black,white,middle,center,10,2][size=90][center][b]RATING[/b][/center][/size][/tdwidth]
[tdwidth=1,black,white,middle,center,80,2][size=90][center][b]COMMENTS[/b][/center][/size][/tdwidth]
[/tr]
[tr]
[td][size=85]Roleplay Quality[/size][hr][/hr]
[size=85]Character Depth/Portrayal[/size][hr][/hr]
[size=85]Out-of-Character Demeanor[/size][/td]
[td][center][size=85]${$('input[name="field21"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field22"]:checked').val()}[/size][hr][/hr]
[size=85]${$('input[name="field23"]:checked').val()}[/size][/center][/td]
[td][size=85][center][ooc]${$('#roleplay_comments').val()}[/ooc][/center][/size][/td]
[/tr]
[tr][/tr]
[/table]

[transtable=Arial]
[tr]
[td][b][center][size=90]THE TRAINEE'S MOST SATISFACTORY AREA OF PERFORMANCE (PLEASE INCLUDE THE INCIDENT(S) OR EXAMPLE(S) TO JUSTIFY THE TRAINEE'S PERFORMANCE ALONG WITH THE CORRESPONDING CATEGORY NUMBER OR NAME ACCORDING TO THE PRL)[/size][/center][/b][/td]
[/tr]
[tr]
[td]
[size=85]${$('#positive').val()}[/size][/td]
[/tr]
[/transtable]

[transtable=Arial]
[tr]
[td][b][center][size=90]THE TRAINEE'S LEAST SATISFACTORY AREA OF PERFORMANCE (PLEASE INCLUDE THE INCIDENT(S) OR EXAMPLE(S) TO JUSTIFY THE TRAINEE'S PERFORMANCE ALONG WITH THE CORRESPONDING CATEGORY NUMBER OR NAME ACCORDING TO THE PRL)[/size][/center][/b][/td]
[/tr]
[tr]
[td]
[size=85]${$('#negative').val()}[/size][/td]
[/tr]
[/transtable]

[transtable=Arial]
[tr]
[td][b][center][size=90]DELIVERED PRACTICAL & THEORETICAL KNOWLEDGE[/size][/center][/b][/td]
[/tr]
[tr]
[td]
[size=85]${$('#documented').val()}[/size][/td]
[/tr]
[/transtable]

[transtable=Arial]
[tr]
[td][b][center][size=90]FEEDBACK FORM (TRAINEE USE ONLY)[/size][/center][/b][/td]
[/tr]
[tr]
[td][justify][b][size=85]INSTRUCTIONS:[/size][/b]
[size=85]At the completion of the Field Training Patrol, the trainee should submit a confidential performance evaluation on their FTO.

The FTP Command will review each FTO Feedback that is completed by a trainee. This will remain confidential information between FTP Command and the trainee. The information will be used to improve the overall performance of the FTO as a trainer and evaluator.

[b][url=https://forms.gle/CaQbHpXQFgCaXGea8]FTO Feedback Form[/url][/b][/size][/justify][/td]
[/tr]
[/transtable]
[/block]`

  $('#output').val(output);
});

$('#copy').click(function () {

  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

});

$('#dark-mode-toggle').click(function() {
  $('body').toggleClass('dark-mode');
  let mode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
  document.cookie = 'darkMode=' + mode + ';path=/;expires=' + new Date(Date.now() + 7 * 86400 * 1000).toUTCString();
});

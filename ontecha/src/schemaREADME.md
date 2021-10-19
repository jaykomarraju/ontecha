# How does ontecha work

### Essentially the user input entered could be: create a new plan/Create new content or batch Day/upload File/create Folder/Drag and drop ideas and content onto a content day/Drag and drop content days onto batches/create a new note/delete note/delete File/. This has the following format: uploadFrequency, batchSize, contentFrequency, startDate, endDate, uploadPlatform, designColor
Based on this input a plan object is generated. A plan object is has the following design: startDate, endDate, contentDays[], batchDays[], platform, color.

A list of plan objects should be a attribute of the calendar object. A calendar object can have multiple plan objects. Each user can have one calendar associated with their account but that isn't necessary. Every calendar object should have a user associated with it. 

A calendar object is a collection of multiple day objects broken up. Each day object can be 3 types: content day, batch day, no event day. A content day extends day and has the following attributes: ideas list, content list, and refLink list. A batch day extends day and has the following attributes: reminder list, content day list. A no event day has no attributes. On click a modal pops up to setup a no event day as a content day or batch day.
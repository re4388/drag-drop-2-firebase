
/* necessary tool  */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();





// Endpoint:
// https://us-central1-drag-drop-to-watch.cloudfunctions.net/createNewToWatch?title=11?url=22M
exports.createNewToWatch = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const description = req.query.description;
  const url = req.query.url;
  const date = new Date();

  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore()
    .collection('ToWatchCollection')
    .add({
      date,
      done: false,
      group: `todo-group`,
      description,
      url,
    });
  // Send back a message that we've successfully written the message
  res.json({
    result: `Message with ID: ${writeResult.id} added.`
  });
});

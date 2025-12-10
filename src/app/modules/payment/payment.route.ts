// /webhokk ai route a hit korte parbona aivabe, karon /webhook stripe er akta domain a thakbe. Jeheto app.ts file a all api ke cors er moddhe pass kore tarpor aikhane aste hosse, tai /webhook ai route a er main domain kew sei cors er moddhe add korte hobe. But aita kora thik noi, karon cors er moddhe add korle, oi doman er admin amader api access korte parbe. so app.ts file a manualy ai api ta add korte hobe.
// router.post(
//   "/webhook",
//   express.raw({ type: "application/json" }), // important for signature verification
//   stripeWebhookHandler
// );

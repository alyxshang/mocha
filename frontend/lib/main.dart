import 'package:flutter/material.dart';
import 'feedback.dart';
import 'retrieve.dart';
import 'package:qlevar_router/qlevar_router.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routeInformationParser: QRouteInformationParser(),
      routerDelegate: QRouterDelegate(
        [
          QRoute(path: '/', builder: () => MyHomePage()),
          QRoute(path: '/:id', builder: () => MyHomePage()),
        ],
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String urlName = '';
  String urlLink = '';
  bool showFeedback = false;
  @override
  Widget build(BuildContext context) {
    TextEditingController nameController = new TextEditingController();
    TextEditingController urlController = new TextEditingController();
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text('MOCHA'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Link Name',
            ),
            new TextField(controller: nameController),
            const Text(
              'Link Url',
            ),
            new TextField(controller: urlController),
            new Text('$urlName & $urlLink'),
            showFeedback
                ? FeedbackPage(
                    name: urlName,
                    urlLink: urlLink,
                  )
                : new Text('')
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => {
          setState(() {
            urlLink = urlController.text;
            urlName = nameController.text;
            showFeedback = true;
          })
        },
        tooltip: 'Increment',
        child: const Icon(Icons.cloud_upload),
      ),
    );
  }
}

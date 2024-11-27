import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter/material.dart';

class LinkObject {
  final String name;
  final String date_time;
  final String link_url;
  final String shasum;
  final String id;
  const LinkObject(
      {required this.name,
      required this.date_time,
      required this.link_url,
      required this.shasum,
      required this.id});
}

Future<String> postLink(String name, String link) async {
  DateTime now = new DateTime.now();
  String timeStamp =
      '${now.year}/${now.month}/${now.day}/${now.hour}/${now.minute}/${now.second}';
  var client = http.Client();
  http.Response response =
      await client.post(Uri.http('127.0.0.1:8080', 'submit'),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: jsonEncode({'name': name, 'time': timeStamp, 'link': link}));
  String result = '';
  if (response.statusCode == 200) {
    result = response.body;
  } else {
    print(response.body);
    result = '1';
  }
  return result;
}

class FeedbackPage extends StatefulWidget {
  const FeedbackPage({super.key, required this.name, required this.urlLink});
  final String name;
  final String urlLink;
  @override
  State<FeedbackPage> createState() => FeedbackPageState();
}

class FeedbackPageState extends State<FeedbackPage> {
  late final Future<String> linkObject;
  @override
  void initState() {
    super.initState();
    linkObject = postLink(widget.name, widget.urlLink);
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: linkObject,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return Text('${snapshot.data}');
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }
          return const CircularProgressIndicator();
        });
  }
}

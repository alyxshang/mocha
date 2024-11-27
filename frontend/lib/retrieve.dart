import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter/material.dart';

Future<String> getLinkById(String id) async {
  var client = http.Client();
  http.Response response =
      await client.get(Uri.http('127.0.0.1:8080', 'retrieve/$id'), headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  String result = '';
  if (response.statusCode == 200) {
    result = response.body;
  } else {
    result = '1';
  }
  return result;
}

class RetrieveLinkPage extends StatefulWidget {
  const RetrieveLinkPage({super.key, required this.id});
  final String id;
  @override
  State<RetrieveLinkPage> createState() => RetrieveLinkPageState();
}

class RetrieveLinkPageState extends State<RetrieveLinkPage> {
  late final Future<String> linkObject;
  @override
  void initState() {
    super.initState();
    linkObject = getLinkById(widget.id);
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

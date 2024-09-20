<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>

<% request.setCharacterEncoding("utf-8");%>

<h2>폼에서 넘어온 값</h2>
<%
 String id = request.getParameter("id");
 String pass = request.getParameter("pass");
 out.println("입력하신 ID는 " + id + " 이고, ");
 out.println("입력하신 비밀번호는 " + pass + " 입니다.");
%>
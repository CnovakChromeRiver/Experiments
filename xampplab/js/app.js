define(['jquery', 'handlebars', 'zoomooz'], function ($, Handlebars, zoomooz) {

	"use strict";

	// tiles template
	var source = $("#level-1").html(),
		context = {
			tile: [
				{
					id: "expense",
				 	title: "Expense",
					group: [
						{
							heading: "My Unsubmitted Expenses",
							items: [
								{ url: "#", text: "Draft" },
								{ url: "#", text: "Returned" }
							]
						},
						{
							heading: "My Submitted Expenses",
							items: [
								{ url: "#", text: "Awaiting Receipts" },
								{ url: "#", text: "Pending Approval" },
								{ url: "#", text: "Approved For Payment" }
							]
						}
					]
				},
				{ 
					id: "invoice",
					title: "Invoice",
					group: [
						{
							heading: "My Unsubmitted Invoices",
							items: [
								{ url: "#", text: "Draft" },
								{ url: "#", text: "Returned" }
							]
						},
						{
							heading: "My Submitted Invoices",
							items: [
								{ url: "#", text: "Awaiting Receipts" },
								{ url: "#", text: "Pending Approval" },
								{ url: "#", text: "Approved For Payment" }
							]
						}
					]
				},
				{ 
					id: "approval",
					title: "Approval",
					group: [
						{
							heading: "Expenses For My Approval",
							items: [
								{ url: "#", text: "Inbox" }
							]
						}
					]
				}
			]
		},
		template = Handlebars.compile(source),
		html = template(context);

	$("#content").append(html);

	$(".tile, .inner-zoom, .inner-inner-zoom").zoomTarget();
});
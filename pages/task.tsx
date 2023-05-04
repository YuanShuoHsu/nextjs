import React, { useState } from "react";

const headers = {
  "user-agent": "Mozilla/99.0 MDN Example",
  "content-type": "application/json",
};

interface TaskData {
  action: string;
  mytask: string;
}

export default function Task() {
  const mystyle = { fontFamily: "メイリオ" };
  const [message, setMessage] = useState<string>("");
  const [txtMytask, setMytask] = useState<string>("1000");

  const txtMytask_onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMytask(event.target.value);
  };

  const handlerAppDataEvent = async (appdata: TaskData) => {
    const postdata = JSON.stringify({
      mytask: appdata.mytask,
    });
    let apiurl = "/api/tasks/";
    let method = "GET";
    let res = null;
    switch (appdata.action) {
      case "create":
        method = "POST";
        res = await fetch(apiurl, {
          method,
          body: postdata,
          headers,
        });
        break;
      case "delete":
        apiurl = apiurl + appdata.mytask;
        method = "DELETE";
        res = await fetch(apiurl, {
          method,
          body: postdata,
          headers,
        });
        break;
      case "getone":
        apiurl = apiurl + appdata.mytask;
        method = "GET";
        res = await fetch(apiurl, {
          method,
          headers,
        });
        break;
      case "search":
        method = "GET";
        res = await fetch(apiurl, {
          method,
          headers,
        });
        break;
      case "update":
        apiurl = apiurl + appdata.mytask;
        method = "PUT";
        res = await fetch(apiurl, {
          method,
          body: postdata,
          headers,
        });
        break;
    }
    const data = await res?.json();
    setMessage(JSON.stringify(data, null, 4));
  };

  const btn_click = async (action: string) => {
    await handlerAppDataEvent({
      action,
      mytask: txtMytask,
    });
  };

  return (
    <div className="p-4">
      <div className="d-flex flex-column">
        <h2 className="border-bottom pb-2">Task API表單</h2>
        <div className="mb-3 col-6">
          <label htmlFor="txtMyTask" className="form-label fs-6">
            我的任務
          </label>
          <input
            type="text"
            className="form-control"
            id="txtMyTask"
            value={txtMytask}
            onChange={txtMytask_onchange}
          />
        </div>
        <div className="py-1">
          <button
            style={mystyle}
            className="btn btn-success me-1"
            onClick={() => {
              btn_click("create");
            }}
          >
            Create(POST)
          </button>
        </div>
        <div className="py-1">
          <button
            style={mystyle}
            className="btn btn-danger me-1"
            onClick={() => {
              btn_click("delete");
            }}
          >
            Delete(DELETE)
          </button>
        </div>
        <div className="py-1">
          <button
            style={mystyle}
            className="btn btn-primary me-1"
            onClick={() => {
              btn_click("getone");
            }}
          >
            GetOne(GET)
          </button>
          <button
            style={mystyle}
            className="btn btn-primary me-1"
            onClick={() => {
              btn_click("search");
            }}
          >
            Search(GET)
          </button>
        </div>
        <div className="py-1">
          <button
            style={mystyle}
            className="btn btn-warning me-1 text-white"
            onClick={() => {
              btn_click("update");
            }}
          >
            Update(PUT)
          </button>
        </div>
        <hr />
        <pre>{message}</pre>
      </div>
    </div>
  );
}

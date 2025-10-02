import React, { useState, useEffect } from "react";
import "../styles/LeaveApplicationForm.css";

export default function LeaveApplicationForm() {
  // Mock user data (to be replaced by backend API later)
  const [userData, setUserData] = useState({
    applicant: "",
    requestId: "",
    jobTitle: "",
    grade: "",
    department: "",
    division: "",
  });

  useEffect(() => {
    // Later: Fetch user info from backend
    // Example:
    // fetch('/api/user').then(res => res.json()).then(data => setUserData(data));
  }, []);

  return (
    <div className="form-layout">
      {/* Left side - form */}
      <div className="form-container">
        <h3>Leave Application Form</h3>

        <section className="form-section">
          <h4>Application Details</h4>
          <table className="details-table">
            <tbody>
              <tr>
                <td>
                  <strong>Applicant:</strong>
                </td>
                <td>
                  <input type="text" value={userData.applicant} readOnly />
                </td>
                <td>
                  <strong>Request ID:</strong>
                </td>
                <td>
                  <input type="text" value={userData.requestId} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Job Title:</strong>
                </td>
                <td>
                  <input type="text" value={userData.jobTitle} readOnly />
                </td>
                <td>
                  <strong>Grade:</strong>
                </td>
                <td>
                  <input type="text" value={userData.grade} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Department:</strong>
                </td>
                <td colSpan={3}>
                  <input type="text" value={userData.department} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Division:</strong>
                </td>
                <td colSpan={3}>
                  <input type="text" value={userData.division} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="form-section">
          <div className="leave-type">
            <label>
              <strong>Leave Type:</strong>
              <input type="radio" name="leaveType" /> Annual
            </label>
            <label>
              <input type="radio" name="leaveType" /> Circumstances
            </label>
            <label>
              <input type="radio" name="leaveType" /> Sick
            </label>
            <label>
              <input type="radio" name="leaveType" /> Maternity
            </label>
            <label>
              <input type="radio" name="leaveType" /> Paternity
            </label>
            <label>
              <input type="radio" name="leaveType" /> Study Leave
            </label>
            <label>
              <input type="radio" name="leaveType" /> Training
            </label>
          </div>
          <br></br>

          <div className="date-row">
            <label>
              <strong>Starting From: </strong>
            </label>
            <input type="date" />
            <label>
              <strong>To: </strong>
            </label>
            <input type="date" />
            <label>
              <strong>Days Requested: </strong>
            </label>
            <input type="number" min="0" />
          </div>
          <br></br>

          <div className="year-row">
            <label>
              <strong>Current Year: </strong>
            </label>

            <select>
              <option>2025/2026</option>
            </select>
          </div>
          <br></br>
          <label>
            <strong>Reason</strong>
          </label>
          <textarea placeholder="Reason"></textarea>
        </section>

        <section className="form-section">
          <h4>Approvals</h4>
          <table className="details-table">
            <thead>
              <tr>
                <th>Approvers (Login ID, Names / Role)</th>
                <th>Approved by (Names / Date)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <input type="text" placeholder="Enter approver details" />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="add-btn">Add</button>
        </section>
      </div>

      {/* Right side - side panel */}
      <div className="side-panel">
        <div className="side-panel-tabs">
          <div className="side-panel-tab active">Discussions</div>
          <div className="side-panel-tab">Attachments</div>
          <div className="side-panel-tab">History</div>
        </div>
        <div className="side-panel-content">
          <p>
            <strong>Comments/Observations</strong>
          </p>
          <textarea placeholder="Enter comments or observations"></textarea>
        </div>
      </div>
    </div>
  );
}

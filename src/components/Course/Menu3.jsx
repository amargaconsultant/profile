import React, { Component } from 'react'

export class Menu3 extends Component {
    render() {
        return (
          <div>
            <ol className="pl-3">
              <li>
                Module (1) general: Discontinues in Metals and alloys, overview
                of NDT techniques, qualification of NDT personnel, QA for UT.
              </li>
              <li>
                Module (2) Ultrasonic Testing:
                <ul>
                  <li>Ultrasonic waves, nature and propagation.</li>
                  <li>
                    Pulse Echo Flaw Detector, Electric Configuration and Scan
                    Presentation.
                  </li>
                  <li>Calibration of the test Equipment.</li>
                  <li>Flaw detection and sizing.</li>
                  <li>Applying acceptance/rejection criteria.</li>
                </ul>
                Module (2) Penetrant Testing: (as SNT-TC-1A) <br />
                Module (2) Magnetic Particle Testing: (as SNT-TC-1A)
              </li>
              <li>
                Module (3) ASME Code Requirements for Ultrasonic Testing
                (Related Articles "1 and 5", of ASME Code Section V) or others
                Standards (AWS or others)
              </li>
              <li>Module (4) Practical Session and Report Writing.</li>
              <li>
                Examinations: Each Module is followed by the certification exams
                which are prepared according to the requirements of the American
                Society of Nondestructive Testing ASNT-TC-1A Recomended
                Practice. The exams are composed of three tests, General Test,
                Specific Test and Practical Test.
              </li>
            </ol>
          </div>
        );
    }
}

export default Menu3

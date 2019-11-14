import React, { Component } from 'react'

export class Menu2 extends Component {
    render() {
        return (
          <div>
            <ol className="pl-3">
              <li>
                Syllabus of the training course is prepared according the
                Recomended Practice of the American Society of Non-Destructive
                Testing (SNT-TC-1A). The exams are composed of three tests,
                General Test, Specific Test and Practical Test.
              </li>
              <li>
                Training includes theoretical and practical sessions. Testing
                equipment and samples with artificial defects are used during
                training.
              </li>
              <li>
                The Spesific Section of the training will be performed using
                Section V of the ASME Boiler and Pressure Vessel Code. Whoever,
                if the customer is applying another standard or code, it could
                be used in the training process as a substitute to section V.
              </li>
              <li>
                Each candidate has to pass three exams: General, Specific and
                practical.
              </li>
            </ol>
          </div>
        );
    }
}

export default Menu2

import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import AddEditForgeCards from './ForgeCard/AddEditForgeCards'
import AddEditSpecialCards from './SpecialCard/AddEditSpecialCards'

class AddEditArea extends React.Component {

  render() {
    return (
      <div className="AddEditArea">
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle hideBodyClassName="show-accordion">
              <FontAwesomeIcon icon={faPlusSquare} />
              <h2>Add/Edit Forge Card</h2>
            </AccordionItemTitle>
            <AccordionItemBody>
              <AddEditForgeCards />
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <FontAwesomeIcon icon={faPlusSquare} />
              <h2>Add/Edit Special Card</h2>
            </AccordionItemTitle>
            <AccordionItemBody>
              <AddEditSpecialCards />
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default AddEditArea;

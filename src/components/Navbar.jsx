/* eslint-disable react/prop-types */
import * as React from 'react';
import { Logout } from '@mui/icons-material';
import { Dropdown, Spinner } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import image from '../images/navv.jpeg';

export default function ButtonAppBar({ address, amount, symbol, destroy }) {
  return (
    <Parallax bgImage={image} bgImageAlt="the cat" strength={-100}>
      <div style={{ height: 200 }}>
        <div className="w-100 h-100 d-flex flex-row-reverse pt-4 px-4">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              align="end"
              id="dropdown-basic"
              className="d-flex align-items-center border rounded-pill py-1">
              {amount ? (
                <>
                  {amount} <span className="ms-1"> {symbol}</span>
                </>
              ) : (
                <Spinner animation="border" size="sm" className="opacity-25" />
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow-lg border-0">
              <Dropdown.Item
                href={`https://explorer.testnet.near.org/accounts/${address}`}
                target="_blank">
                <div direction="horizontal" gap={2}>
                  <i className="bi bi-person-circle fs-4" />
                  <span className="font-monospace">{address}</span>
                </div>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item
                as="button"
                className="d-flex align-items-center"
                onClick={() => {
                  destroy();
                }}>
                <Logout />
                Disconnect
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Parallax>
  );
}

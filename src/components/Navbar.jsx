/* eslint-disable react/prop-types */
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { Dropdown,  Spinner } from "react-bootstrap";


export default function ButtonAppBar({ address, amount, symbol, destroy }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tours
          </Typography>
            {/* <InputLabel id="demo-simple-select-label">{balance}</InputLabel> */}
            {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={balance}>
              <Logout />
            </Select> */}
            <Dropdown>
          <Dropdown.Toggle
            variant="light"
            align="end"
            id="dropdown-basic"
            className="d-flex align-items-center border rounded-pill py-1"
          >
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
              target="_blank"
            >
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
              }}
            >
              <Logout />
              Disconnect
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

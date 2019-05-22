import React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonProps } from '@material-ui/core/Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
  color?: any;
  variant?: any;
}

const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} component={Link as any} />
)

export default LinkButton;
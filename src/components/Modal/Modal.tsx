import React, { ComponentProps, FC, ReactNode } from 'react';
import { Modal as ModalRN, View } from 'react-native';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { styles } from './Modal.styles';

type Props = ComponentProps<typeof ModalRN> & {
  title?: string;
  visible?: boolean;
  position?: 'top' | 'center';
  onClose: () => void;
  footer?: ReactNode;
};

const Modal: FC<Props> = ({ title, visible, position = 'center', onClose, children, footer, ...props }) => {
  return (
    <ModalRN {...props} visible={visible} transparent onRequestClose={onClose}>
      <View style={[styles.modalOverlay, position === 'top' && styles.modalTop]}>
        <View style={styles.modal}>
          {title && (
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>{title}</Text>
              <Button
                style={styles.modalHeaderIcon}
                color="dark"
                variant="transparent"
                icon="close"
                onPress={onClose}
              />
            </View>
          )}
          <View style={styles.modalBody}>{children}</View>
          {footer && <View style={styles.modalFooter}>{footer}</View>}
        </View>
      </View>
    </ModalRN>
  );
};

export default Modal;

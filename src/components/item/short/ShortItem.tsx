import { Button } from './../../../components/buttons/button/Button';
import React, { useCallback, useState } from 'react';
import { ShortItemProps } from './types';
import UiShort from './ui';
import LazyImage from './../../../components/lazy-image';
import { IsNotEmptyArray } from './../../../utils/helpers/value-tests';
import { t } from 'i18next';
import { useInView } from 'react-intersection-observer';
import SkeletonItem from '../card-item/skeleton';
import Modal from './../../../components/modal';

const ShortItem = ({ currentIndex, data }: ShortItemProps) => {
  const {
    oldPrice = null,
    newPrice = null,
    discount = null,
    title = '',
    images = [],
    description,
    onAddToCart,
    onAddToFavorite,
  } = data;

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    initialInView: currentIndex < 10 ? true : false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const itemContent = (
    <>
      <UiShort.Info>
        {Boolean(discount) && (
          <UiShort.Discount>
            {discount}% {t('components.productList.off')}
          </UiShort.Discount>
        )}

        {IsNotEmptyArray(images) && (
          <UiShort.Img onClick={toggleModal}>
            {/* переделать на слайдер */}
            <LazyImage src={images[0].src} alt={title} width={250} height={250} />

            {isModalOpen && (
              <Modal onClose={toggleModal} isOpen={isModalOpen}>
                <LazyImage src={images[0].src} alt={title} width={350} height={350} />
              </Modal>
            )}
          </UiShort.Img>
        )}
        <UiShort.Prices>
          <Button label="" onClick={onAddToCart} primary={true} size="small" type="button" viewtype="cart" />

          <Button label="" onClick={onAddToFavorite} primary={true} size="small" type="button" viewtype="like" />
        </UiShort.Prices>
      </UiShort.Info>

      <a href="#">
        <UiShort.Title>{title}</UiShort.Title>
      </a>

      <UiShort.Prices>
        {Boolean(newPrice) && (
          <UiShort.Price>
            {t('components.productList.currency')}
            {newPrice}
          </UiShort.Price>
        )}

        {Boolean(oldPrice > newPrice) && (
          <UiShort.OldPrice>
            {t('components.productList.currency')}
            {oldPrice}
          </UiShort.OldPrice>
        )}
      </UiShort.Prices>

      {description && <UiShort.Description>{description}</UiShort.Description>}
    </>
  );

  return (
    <UiShort ref={ref} data-inview={inView}>
      {inView ? itemContent : <SkeletonItem />}
    </UiShort>
  );
};

export default ShortItem;

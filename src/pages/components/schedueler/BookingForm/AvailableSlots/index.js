import React, { useState } from 'react';
import Text from 'shared/components/Text';
import { AVAILABLE_SLOTS } from 'translations/translations';

const AvailableSlots = () => {
  const [selectedSlots, setSelectedSlots] = React.useState([]);
  const [slots] = useState([
    {
      id: 1,
      time: '08:00 am - 08:30 am',
    },
    {
      id: 2,
      time: '08:30 am - 09:00 am',
    },
    {
      id: 3,
      time: '09:00 am - 09:30 am',
    },
    {
      id: 4,
      time: '09:30 am - 10:00 am',
    },
    {
      id: 5,
      time: '10:00 am - 10:30 am',
    },
    {
      id: 6,
      time: '10:30 am - 11:00 am',
    },
  ]);

  const handleAddSlot = slotID => {
    setSelectedSlots([...selectedSlots, slotID]);
  };

  const handleDeleteSlot = (e, slotID) => {
    e.stopPropagation();
    setSelectedSlots(selectedSlots.filter(slot => slot !== slotID));
  };

  return (
    <div className="booking-form__slots">
      <div className="header">
        <Text value={AVAILABLE_SLOTS} />
      </div>
      <div className="body">
        {slots.map(slot => (
          <div
            key={slot.id}
            className={`slot ${selectedSlots.includes(slot.id) ? 'selected' : ''}`}
            onClick={() => handleAddSlot(slot.id)}
            aria-hidden
          >
            <span>{slot.time}</span>
            {selectedSlots.includes(slot.id) && (
              <span onClick={e => handleDeleteSlot(e, slot.id)} aria-hidden>
                <i className="las la-trash" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableSlots;

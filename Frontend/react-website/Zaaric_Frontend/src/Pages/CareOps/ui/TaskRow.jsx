import React from 'react';
import Badge from './Badge.jsx';
import Avatar from './Avatar.jsx';
import { priorityTone } from '../data/statusMaps.js';

const TaskRow = ({ task }) => (
  <div className={`co-task ${task.done ? 'co-task--done' : ''}`}>
    <span className={`co-task__check ${task.done ? 'co-task__check--on' : ''}`}>
      {task.done && (
        <svg viewBox="0 0 12 12" width="10" height="10" focusable="false">
          <path
            d="M2 6L5 9L10 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>

    <span className="co-task__main">
      <span className="co-task__title">{task.title}</span>
      <span className="co-task__link">{task.inquiry}</span>
    </span>

    <span className="co-task__due">
      {task.flag === 'overdue' && (
        <Badge tone="danger" size="sm">
          {task.overdueBy} days overdue
        </Badge>
      )}
      {task.flag === 'today' && (
        <Badge tone="warning" size="sm">
          Due today
        </Badge>
      )}
      {!task.flag && <span className="co-task__date">{task.due}</span>}
    </span>

    <span className="co-task__priority">
      <Badge tone={priorityTone[task.priority] || 'neutral'} size="sm">
        {task.priority}
      </Badge>
    </span>

    <span className="co-task__owner">
      <Avatar name={task.owner} size="sm" />
    </span>
  </div>
);

export default TaskRow;
